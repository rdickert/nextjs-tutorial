// return JSON from http://localhost:3000/api/hello
// Use client-side only. Call server functions directly in getStaticProps or getStaticPaths

export default function handler(req, res) {
  res.status(200).json({ text: 'Hello' })
}