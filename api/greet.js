export default function handler(req, res) {
  const { name = "Guest" } = req.query;
  res.status(200).json({ message: `Welcome ${name} to my API!` });
}
