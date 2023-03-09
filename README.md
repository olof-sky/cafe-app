# Café application

### Todo

- [x] Create and structure db in firebase from current data.
- [x] Create and structure storage in firebase to handle images.
- [x] Connect db to components to handle images, text and links.
- [ ] Create CRUD-functionality for db and storage
- [ ] Create admin page for handling of database

  ### Admin page

  Use cards to display inputs/existing cards for Aside and Campaign content. UseContext to get cards to state while working and use Publish all-button to send POST request to db.

  #### Data structure

  Data provided by Provider in index.js, provider context distributes useFirestore hook. useFirestore contains data state and API functionality.

  #### Card behavior

  New card button click initiate the card in state with id. Update state on inputs, trigger on keydown. On img upload showcase the image in new card. Each card is an object similar to that of the db structure. Ingredients in campaign card have their own id for delete function.

  #### Required inputs

  | Card          | Input                     |
  | ------------- | ------------------------- |
  | Aside card    | `All inputs required`     |
  | Campaign card | `Ingredient not required` |

- [ ] Set loader containers to fit animation.
- [ ] Refactor code for handling variables in admin page
- [ ] Refactor code for better reusability of components
- [ ] Refactor variable naming for reusability
- [ ] Add more pages
  - [ ] Kontakt
  - [ ] Bilder
  - [ ] Tårtor
  - [ ] Bröllop

### Concept

Café webpage showcasing cakes, sales, offers and contact information etc.

### Available Scripts

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
