# Patient Management System: Nextjs 14.2.4

> This project get from [JavaScript Mastery](https://www.youtube.com/@javascriptmastery) YouTube channel.

> Project Link [Build and Deploy a Patient Management System with Next.js | Twilio, TypeScript, TailwindCSS](https://youtu.be/lEflo_sc82g?si=d27ou7PfLC6jPKbe)

## shadcn/UI

- [shadcn](https://ui.shadcn.com/) is designed components that you can copy and paste into your apps.
- you can also install components using `npx` command.

## React-phone-number-input

- [react-phone-number-input](https://www.npmjs.com/package/react-phone-number-input) is a React component that allows users to input and validate phone numbers.
- you can install it using `npm i react-phone-number-input`

## Appwrite Cloud

- [Appwrite](https://appwrite.io/) is an open-source platform. Add Authentication, Databases, Functions, Storage, and Messaging to your projects using the frameworks and languages of your choice

- you can install using this `npm install node-appwrite`.
- Here create an app write account and create a new project.
- copy the project ID and paste it into env.local.
- then go integrate with your server section and click `apikey` button.
- file the form and select what are the scopes you want like auth, storage, database etc.
- after that, it shows api key secret copy the API key and paste it into env.local.
- then go to the database section create a new database and give it a name.
- after that, it shows the database ID copy it and paste it into env.local.
- then create a collection and give it a name it's like a table.
- every time you create a collection it shows the collection ID copy it and paste it into env.local.

- then go to the storage

  - in the appwrite section click and create on `storage` copy the storage ID and paste it into env.local.
  - it's used for uploading files and images like a bucket.

- the below way to create a node side appwrite config file.

```typescript
import * as Sdk from "node-appwrite";
export const {
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
} = process.env;

const client = new Sdk.Client();

client.setEndpoint(ENDPOINT!).setProject(PROJECT_ID!).setKey(API_KEY!);

export const databases = new Sdk.Databases(client);
export const storage = new Sdk.Storage(client);
export const messaging = new Sdk.Messaging(client);
export const users = new Sdk.Users(client);
```

- you want to create a schema for collection in appwrite dashboard like table columns.
- so go to the collection section select the collection and click on create attributes to create schema.

- after that go settings of the collection and add permission to create, read, update and delete.

## React-datepicker

- [react-datepicker](https://www.npmjs.com/package/react-datepicker) is a React component that allows users to select dates and times.
- you can install it using `npm install react-datepicker --save`
