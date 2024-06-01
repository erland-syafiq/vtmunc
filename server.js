import express from "express";
import { getApplicants, putApplicant } from "./src/dynamodb.js";
import { generateRandomId, getCurrentDate } from "./src/util.js";
import { fileURLToPath } from 'url';
import path, {dirname} from "path";
import cors from "cors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 8080;

// Middleware
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// Hello world test
app.get("/helloworld", (req, res) => {
    res.status(200);
    res.send("Hello World");
});


// Applicants routes
app.get("/api/applicants", async (req, res) => {
    try {
        const applicants = await getApplicants();
        res.status(200);
        res.send(applicants);
    }
    catch (e) {
        console.log(e);
        res.status(500);
        res.send("Error with applicants");
    }
});

app.post("/api/applicants", async (req, res) => {
    try {
        const body = req.body;
        console.log(body);
        const applicant = {
            advisorPhone: body["advisorPhone"],
            delegationSize: body["delegationSize"],
            headDelegateName: body["headDelegateName"],
            schoolName: body["schoolName"],
            advisorOtherInformation: body["advisorOtherInformation"],
            commentsOrQuestions: body["commentsOrQuestions"],
            advisorEmail: body["advisorEmail"],
            advisorRelation: body["advisorRelation"],
            schoolMailingAddress: body["schoolMailingAddress"],
            headDelegateEmail: body["headDelegateEmail"],
            headDelegatePhone: body["headDelegatePhone"],
            advisorName: body["advisorName"],
            delegateList: body["delegateList"],
            invoiceStatus: 0,
            id: generateRandomId(),
            date: getCurrentDate()
        }
        console.log(applicant);
        await putApplicant(applicant);
        res.status(200);
        res.send();
    }
    catch (e) {
        res.status(300);
        res.send(`Error with adding applicant: ${e}`);
    }
});

// Serving Front End Application
app.use(express.static(path.join(__dirname, 'public/dist')))
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, 'public/dist/index.html'));
})


app.listen(port, function() {
    console.log(`Checkout app on http://localhost:${port}`);
});