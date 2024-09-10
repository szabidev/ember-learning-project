# ember-tutorial-e-commerce learning project

FIX Icons

## Add jsconfig.json file

```
{
  "compilerOptions": {
    "target": "ES2015",
    "experimentalDecorators": true
  },
  "exclude": ["node_modules", "dist"]
}
```

## Update ember-cli-build.js if using 3rd party libraries

- For example for sass you need this option

```sassOptions: {
      extension: 'scss'
    }
```

## Routing system

- Application route - default route, application start route

- Basic route - localhost:4200/`shopping-cart` - outlet in application.hbs will be replaced with the content of clothes.hbs
- Nested route - localhost:4200/clothes/`t-shirt`

- Index route - localhost:4200/`shopping-cart` - on every level of nesting ember automatically provides an index route, so the content of clothes will be only visible in this route otherwise it would be also visible on every nested route - index route is the default route in the current level

- Dynamic routes - localhost:4200/`item/123` , need to add model to routes/item.js to use item_id

- 404 not found route - to be the last route in your router.js file, overide pathname to /\*path

## Router & Controller

- They work for the same url, they have the same name, but different folder (route, controller)
- They render the template component
- Route can have a model, and Controller can have actions and properties
- The controller has acces also to the model from the route

## Component

- Componennts can be put inside a router or inside another component
- Nested component are used like this <Component::NestedComponent/>
