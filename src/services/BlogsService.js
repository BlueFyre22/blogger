import { logger } from "@/utils/Logger.js";
import { api } from "./AxiosService.js";
import { Blog } from "@/models/Blog.js";
import { AppState } from "@/AppState.js";

class BlogsService {
  async getBlogs() {
    const response = await api.get("api/blogs"); //got it
    logger.log("blogs? 📜", response.data); //logged it
    const blogs = response.data.map((pojo) => new Blog(pojo));
    AppState.blogs = blogs;
  }

  async getBlogById(blogId) {
    const response = await api.get(`api/blogs/${blogId}`);
    logger.log("Blog by ID", blogId, response.data);
    const activeBlog = new Blog(response.data);
    AppState.activeBlog = activeBlog;
  }
}

export const blogsService = new BlogsService();
