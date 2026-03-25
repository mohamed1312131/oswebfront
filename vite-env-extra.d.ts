// Ensure TypeScript can resolve packages that ship .d.mts typings under some TS setups.
declare module '@tailwindcss/vite' {
  const plugin: any
  export default plugin
}

