## TODO


- [ ] a Mustache template linter that can run as a build phase
    - warns of syntax errors
    - warns of compatibility issues:  `{{ a/b }}` syntax is deprecated, used `a.b` instead, etc.
- [ ] Document that errors are no longer logged.
- [X] check that {{^ [NSNull null]|@NO }}...{{.}}...{{/}} does not mess with the {{.}}
- [X] Consider replacing GRMustacheTemplate.partialNode with GRMustacheTemplate.templateAST
- [X] Rename `identifier` to `name`
- [X] Fix link to filters Guide from GRMustacheFilter.h
- [X] Document [GRMustacheTemplateRepository templateRepositoryWithDictionary:] changes (mutability of the dictionary)
- [X] Document [GRMustacheTemplateRepository reloadTemplates] in release notes.
- [X] Test [GRMustacheTemplateRepository reloadTemplates].
- [X] have [GRMustacheTemplate templateFromString:error:] use current repository & content type, and deprecate GRMustacheTag.templateRepository
- [?] have GRMustacheTemplateRepository cache template from string (for faster rendering objects)
- [X] expose GRMustacheTemplate.templateRepository
- [X] document dropped support for garbage collection
- [X] pass http://twitter.github.com/hogan.js/ inheritable template tests
- [X] pass https://github.com/spullara/mustache.java inheritable template tests
- [X] Update the documentation to de-emphasize KVC exceptions.
- [X] Consistent use of the "template inheritance" wording.
- [X] Rewrite documentation for default values for any keys
- [X] Remove all GRMustacheContext subclassing documentation
- [X] Document secure key access to Foundation classes
- [ ] Document the drop of support for adding context into another context
- [X] Rename "protected context" to "Priority keys"
- [X] change version method
- [X] have overridable section use their own identifiers, not expressions.
- [X] Fetch inspiration from "faster mutable strings" in fotonauts/handlebars-objc (https://github.com/fotonauts/handlebars-objc/commit/f2cbde7e12b1fb594c2807a57bd2ecd2adb839b4)
    - [X] for escaping methods
    - [X] for rendering buffers
- [X] Remove GRMustacheContext subclasses.
- [X] safe property access (https://github.com/fotonauts/handlebars-objc/blob/master/doc/ContextObjects.md#why-does-handlebars-limit-access-to-some-attributes-that-are-normally-accessible-using-key-value-coding)
  - [X] Add GRMustacheContext.allowsAllKeys
  - [X] Rename validMustacheKeys to allowedMustacheKeys or something like that. Be consistent with GRMustacheContext.allowsAllKeys
  - [X] Tests for secure key access
- [ ] examine dependencies using https://github.com/nst/objc_dep $ python objc_dep.py -x "(GRMustacheAvailabilityMacros)" ~/Documents/git/groue/GRMustache/src/classes/ > ~/Desktop/GRMustacheDeps.dot

## Nice to have

- [ ] document migration path from all previous versions to latest version
- [ ] > But they do allow Xcode to see the symbols when creating the final executable and allow the static library symbols to get included in the final DSYM file thereby allowing full symoblication of crash reports. (https://github.com/RestKit/RestKit/issues/1277)

