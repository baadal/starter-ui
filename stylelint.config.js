module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-standard-scss"],
  rules: {
    "selector-class-pattern": "^[a-z][a-zA-Z0-9]+$",  // camelCase
    "selector-pseudo-class-no-unknown": [
      true,
      {
        "ignorePseudoClasses": ["global", "export"]
      }
    ],
    "rule-empty-line-before": [
      "always",
      {
        ignore: ["inside-block"],
        except: ["after-single-line-comment"]
      }
    ],
    "scss/at-rule-no-unknown": null,
  }
}
