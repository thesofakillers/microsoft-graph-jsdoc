# JSDocs for Microsoft Graph

Since I could not find pre-written [JSDoc](https://devdocs.io/jsdoc/) [typedefs](https://jsdoc.app/tags-typedef.html) for resources defined in Microsoft's [Graph API](https://docs.microsoft.com/en-us/graph/), I decided to write them myself. 

I am updating this repository as I go on and deem necessary, please feel free to contribute. 

## Why?

Suppose you are working on a project which interfaces with MS Graph and hence touches its resources, potentially passing them as arguments to functions or expecting them as return values. Having defined @typedefs in your code can render your life easier via services that integrate with JSDoc such as [VS Code's IntelliSense](https://code.visualstudio.com/docs/editor/intellisense), reducing the need to constantly switch to your browser to read the documentation. 

## Future Plans

Right now, I'm writing these typedefs manually whenever I find the need to. In the future (i.e. when I have more time lol), it would be nice to parse [this subdirectory](https://github.com/microsoftgraph/microsoft-graph-docs/tree/master/api-reference/v1.0/resources) and automatically generate typedefs from it. 
