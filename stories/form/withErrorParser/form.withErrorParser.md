# Using error parser

**errorParser** property can be used as a handler for server-side errors. 

For example, server may respond that the username already exist, with the appropriate error body.
The client form will parse the body and add errors to the **validator**.
