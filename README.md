# Shopify Theme - Tailwind Boilerplate
# Store
`sparky-sandbox.myshopify.com`
## Login
`shopify logout`
`shopify login --store sparky-sandbox`

# Staging Theme
`Your Store - Staging`

# TAILWIND.CSS
This theme uses the tailwind css cli. You should have 2 terminals, one for serving the shopify theme, and one for watching & compiling the Tailwind utility classes.
## Use this command to watch your css files in development
`npx tailwindcss -i ./assets/tailwind_directives.css -o assets/tailwind.css --watch`
## Use this command to build and minify your css before going live
`NODE_ENV=production npx tailwindcss -i ./assets/tailwind_directives.css tailwindcss -o assets/tailwind.css --minify`