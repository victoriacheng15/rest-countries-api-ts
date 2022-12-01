# REST Countries API - TypeScript Version

This is an app that I re-built with TypeScript. You can see the [JS version ](https://github.com/victoriacheng15/fem-rest-countries-api#readme).

An app contains `search` and `dropdown` features where users can use search box to search the desired country and use dropdown to filter countries by regions (Africa, Americas, Asian, Europe, and Oceania). The users also can click a country to view more detailed information.

[Demo](https://rest-countries-api-ts-vc.netlify.app/)

## Screenshots/GIFs

<details close>
<summary>Search Demo</summary>

![Search Demo](./media/search.gif)

</details>

<hr />

<details close>
<summary>Filter by Region Demo</summary>

![Filter by region Demo](./media/filter-region.gif)

</details>

<hr />

<details close>
<summary>Theme Switch Demo</summary>

![Theme Switch Demo](./media/theme-switch.gif)

</details>

<hr />

<details close>
<summary>Pagination Demo</summary>

![Pagination Demo](./media//pagination.gif)

</details>

## The challenge

Users should be able to:

- [x] See all countries from the API on the homepage with pagination
- [x] Search for a country using an `input` field
- [x] Filter countries by region
- [x] Click on a country to see more detailed information on a separate page
- [x] Click through to the border countries on the detail page
- [x] Toggle the color scheme between light and dark mode

## My process

### Built with

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Router - v6](https://reactrouter.com/en/v6.3.0)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Vite](https://vitejs.dev/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

### What I learned

**TypeScript**

I learned about 4 ways to assign types with interface, type, enum and as (see in interface example). For `as` method, it doesnt seem be a common way to assign, maybe I have not see enough TS codebase. I learned about this from the [React TypeScript cheatsheet](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/context). This cheatsheet is great and helped me tons with how to keep types checking consistent throughout this project.

There was a tricky thing about types checking for the API because API may has a couple levels of nested objects. I was stuck on this for a while.

Like currencies property from the REST countries API:

```js
"currencies": {
  "CAD": {
    "name": "Canadian dollar",
    "symbol": "$"
  }
},
```

If I declare the interface like below, this will not work and TS informed that the currencies string type is not assignable. I did some [Type Challenges](https://github.com/type-challenges/type-challenges). One challenge was using [mapped types](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html) and I was thinking maybe I need to use this.

```ts
interface Country {
  currencies: string;
}
```

Using mapped types:

```ts
// Canada
"currencies": { // => string
  "CAD": { // => string
    "name" /* => string */: "Canadian dollar" /* => string */,
    "symbol": "$"
  }
},
```

Let's see how the API is structured. `currencies` is the key for the type checking. `CAD` is also a string. Lastly, declare it with `name` with type `string`. Think `[key: string]` as a universal way to check nested object type. I could declare with `CAD` instead, but this will _only_ work for country with currency of `CAD`. This would not work with `USD` or other currencies.

```ts
interface Country {
  currencies: {
    [key: string]: {
      name: string;
    };
  };
}
```

You can view examples below!

<details close>
<summary>interface example 👇</summary>

```ts
interface Countries {
  cca3: string;
  flags: {
    [key: string]: string;
  };
  alt: string;
  name: {
    [key: string]: string;
  };
  population: string;
  region: string;
  capital: string;
}

interface Country extends Countries {
  subregion: string;
  tld: string[];
  currencies: {
    [key: string]: {
      name: string;
    };
  };
  languages: {
    [key: string]: {
      [key: string]: string;
    };
  };
  borders: string[];
}
```

Another example that extends interface twice

```ts
interface CountriesContextType extends CountriesState, FormState {
  setSearch: (search: string) => void;
  setSelect: (select: string) => void;
}

const CountriesContext = createContext({} as CountriesContextType);
```

</details>

<details close>
<summary>type example 👇</summary>

```ts
interface FetchSuccess {
  type: FetchActions.FETCH_SUCCESS;
  payload: Countries[];
}

interface FetchFailure {
  type: FetchActions.FETCH_ERROR;
}

type CountriesAction = FetchSuccess | FetchFailure;
```

</details>

<details close>
<summary>enum example 👇</summary>

```ts
export enum FetchActions {
  FETCH_SUCCESS = "fetch_success",
  FETCH_ERROR = "fetch_error",
}
```

</details>

**useReducer**

This hook is pretty nice and allow you to bundle all states update into one function with one hook.

if used `useState` for fetching API, I would need to define 3 `useState` hook for data, loading and error. While `useReducer` hook, I can do this below with `initialState1`, `reducer` and lastly `userREducer`. States will update based on the dispatch action. I do see an advantage of `useReducer` for larger states update with more actions.

```ts
const initialState = {
  countries: [],
  loading: true,
  error: "",
};

const reducer = (state: CountriesState, action: CountriesAction) => {
  switch (action.type) {
    case FetchActions.FETCH_SUCCESS:
      return {
        ...state,
        countries: action.payload,
        loading: false,
      };
    case FetchActions.FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: "Something went wrong",
      };
    default:
      return state;
  }
};

const [{ countries, loading, error }, dispatch] = useReducer(
  reducer,
  initialState
);
```

**useMemo**

According to the docs, `useMemo` allows you to cache the result of a calculation between re-renders. In short, it remembers the "calculation" from before and prevent re-render. Since this app data is fairly small and I may not see the benefit of this hook. However, I decided to use this hook for a reason of to see how it works and interacts.

At first, I didn't pass any dependencies in the square brackets. I noticed that the page shows blank. I assumed the hook "remember" there was nothing to display. Later, I added `countries` to the square brackets, and the hook "remember" there is a list of cards to display.

```ts
const sortedCountries = useMemo(() => {
  return countries.sort((a, b) =>
    a.name.official.localeCompare(b.name.official)
  );
}, [countries]);
```

**useCallback**

According to the docs, `useCallback` allows you cache a function definition between re-render. I decided to use this hook for the same as as `useMemo`. It works same/similar way as `useMemo` for less re-render and better performance of the app.

```ts
const setSearch = useCallback((search: string) => {
  dispatch({
    type: ActionTypes.SET_SEARCH,
    payload: search,
  });
}, []);
```

### Continued development

I am looking to add React Testing Library for this project to solidify my knowledge with Test-Driven Development.

### Resources

- [useMemo hook](https://beta.reactjs.org/apis/react/useMemo)
- [useCallback hook](https://beta.reactjs.org/apis/react/useCallback)
- [React TypeScript cheatsheet](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/context)

## Author

- [GitHub](https://github.com/victoriacheng15)
- [LinkedIn](https://www.linkedin.com/in/victoriacheng15/)
- [Twitter](https://twitter.com/viktoriacheng15)
