module.exports = {
    root: true,
  
    env: {
      browser: true,
      node: true
    },
    parserOptions: {
      parser: '@typescript-eslint/parser',
      requireConfigFile: false
    },
  
    extends: [
      'plugin:@typescript-eslint/recommended',
      'plugin:nuxt/recommended',
      'plugin:vue/vue3-recommended'
    ],
  
    plugins: ['@typescript-eslint'],
  
    rules: {
      'vue/script-setup-no-uses-vars': 'off',
      'vue/multi-word-component-names': 'off',
      "vue/max-attributes-per-line": ["error", {
        "singleline": {
          "max": 4
        },      
        "multiline": {
          "max": 1
        }
      }],
      "vue/no-v-text-v-html-on-component": "off",
      "@typescript-eslint/no-explicit-any": "off"
    }
  }
  