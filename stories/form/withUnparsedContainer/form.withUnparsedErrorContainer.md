# Dealing with other server errors

**handleUnparsedErrors** property is needed for enable/disable the mechanism for processing unparsed errors.

For example, server may respond with an error code of ***503*** . In this case, the form fields were not processed by the server and the user needs some visual explanations about this.

**< UnparsedErrorContainer >** component is responsible for displaying any unparsed error.

It takes a ***function*** as ***children*** and returns a raw error as the first argument.
