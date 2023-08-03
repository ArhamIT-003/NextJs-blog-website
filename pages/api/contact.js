import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    const uri =
      "mongodb+srv://arham_1809:jethalal_123@arhamcluster.mxu4yup.mongodb.net/user-form?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    try {
      client.connect();

      let db = client.db();

      try {
        const result = db.collection("messages").insertOne(newMessage);
        newMessage.id = result.insertedId;
      } catch (err) {
        client.close();
        res.status(500).json({ message: "Storing message failed." });
        return;
      }

      client.close();

      res.status(201).setHeader("Content-Type", "application/json");
      res.json({ message: newMessage });
    } catch (err) {
      console.log(err);
      res.status(422).json({ message: "Can't connect to database" });
      return;
    }
  }
}
