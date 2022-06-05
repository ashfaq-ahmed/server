import { home } from "../controllers/index.controller";

export default function (app) {
    app.route('/')
        .get(home)
}