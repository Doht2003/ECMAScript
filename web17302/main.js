import ErrorPage from "@/pages/error";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { render, router } from "./src/lib";
import AboutPage from "./src/pages/about";
import AdminProjectsPage from "./src/pages/admin/projects";
import AdminProjectAddPage from "./src/pages/admin/projects-add";
import ContactPage from "./src/pages/contact";
import HomePage from "./src/pages/home";
import NotFoundPage from "./src/pages/not-found";
import PostDetailPage from "./src/pages/post-detail";
import PostsPage from "./src/pages/posts";
import ProjectDetailPage from "./src/pages/project-detail";
import ProjectsPage from "./src/pages/projects";

const app = document.querySelector("#app");

router.on("/", () => render(HomePage, app));
router.on("/about", () => render(AboutPage, app));
router.on("/contact", () => render(ContactPage, app));
router.on("/error", () => render(NotFoundPage, app));
router.on("/projects", () => render(ProjectsPage, app));
router.on("/project/:projectId", ({data}) => render(() => ProjectDetailPage(data), app));
router.on("/post/:postId", () => render(PostDetailPage, app));
router.on("/posts", () => render(PostsPage, app));

router.on("/admin/projects", () => render(AdminProjectsPage, app));
router.on("/admin/projects/add", () => render(AdminProjectAddPage, app));
router.on("/project/:projectId/edit", ({data}) => render(() => ProjectDetailPage(data), app));
router.notFound(() => render(NotFoundPage, app));

router.resolve();
// render(HomePage, app);
// npm i navigo --save

// Quy chuẩn commit 
// feat: tính năng mới 
// fix: fix bug
// style
// docs: edit produc document
// refactor: tối ưu code


/** Cài json-server
 *  Bước 1: npm i -g json-server
 * Bước 2: Truy cập folder root 
        json-server --watch db.json

    GET /projects -> list
    GET /projects/:id -> single
    POST /projects -> add
    PUT /projects/:id + body -> update
    DELETE /projects/:id -> delete
*/

/**
 * Cài đặt template vanilla js: npm create vite@latest Portfolio -- --template vanilla
Truy cập vào thư mục: cd we17309
Bật thư mục trong VSC: code .
Cài đặt package: npm i
Chạy project: npm run dev
 */