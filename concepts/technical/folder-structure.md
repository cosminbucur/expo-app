# folder structure
assets
    icons
    images
    themes
        dark.js
        light.js
        themeProvider.js

core
    api.js
    navigation.js
    reducers.js
    sagas.js
    store.js

components
    common
        Button
            index.js
            styles
                index.js
        index.js
    index.js
    sections
        layout
        navigation
            bottomNavigation
                index.js
            drawer
                index.js
            sidebar
                index.js

config
    action messages
    validation messages
    colors.js

screens / features
    {component}
        components
            {Component}AddModal.jsx
            {Component}EditModal.jsx

        {component}Actions.js
        {component}Api.js
        {component}Reducer.js
        {component}Saga.js
        {component}Selector.js

        {Component}Screen.jsx

globals
    global.actions.js
    global.functions.js
    global.state.js
    global.types.js
    global.variables.js
    index.js

routes
    index.js
    routes.navigator.js

store

### best practices

https://cheesecakelabs.com/blog/efficient-way-structure-react-native-projects/

https://dev.to/lhuria94/structure-a-react-native-app-ig

https://medium.com/react-native-training/best-practices-for-creating-react-native-apps-part-1-66311c746df3