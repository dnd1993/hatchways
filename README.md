# Submission Notes

The Students app allows users to view the detailed information of all the students listed by [Hatchways API](https://api.hatchways.io/assessment/students).

## Technical decisions

- Functional Components with various Hooks are used over Class Components as they are concise and result in more straightforward code.
- The useGlobalContext custom hook, which is based on the useContext hook, was created to facilitate easy access to global states, to avoid prop drilling and to make the code cleaner.
- The SearchInput component can be easily reused if in the future there will be a feature request to add more search fields (by company, email, etc.)
- Components follow the single responsibility principle.

## Possible changes

- Save added tags to local storage or send a post request to the API (that allows to do so).
- Add React Router to be able to add more pages/views in the future.
- Before allowing a user to add a new tag, check if this is a unique tag (no duplicates). For example:

```
const setTags = (tagInput) => {
    const tagsList = getStudentById(students).tags;
    if(!tagsList.includes(tagInput)) tagsList.push(tagInput);
    setStudents(students);
  };
```

- Validate user's input to the Search by name field (e.g.: no numbers, no special characters). For example:

```
const validateNameInput = (nameInput) =>
  /[0-9]/.test(nameInput) ||
  /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(nameInput);
```
- Add unit tests for the functions responsible for filtering (by name, by tag).

- Add a Loading Component that would be shown when the API call is made and while the response has not yet been received.

## Learning resources

1. https://reactjs.org/docs
2. https://www.youtube.com/freecodecamp
3. https://developer.mozilla.org/en-US/

