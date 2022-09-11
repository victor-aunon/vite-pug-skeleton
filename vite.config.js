import vitePugPlugin from "vite-plugin-pug-transformer";

const locals = { info: {
  name: ["This is a local variable"]
}}

export default {
  plugins: [vitePugPlugin({ pugLocals: locals})],
};
