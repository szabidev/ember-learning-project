# ember-tutorial-e-commerce learning project

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
