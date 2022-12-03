import React, { useEffect, useRef, useState } from "react";
import PostsItems from "../components/PostsItems";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import ErrorModal from "../components/UI/modalError/ErrorModal";
import { usePost } from "../components/hooks/usePost";
import PostService from "../components/API/PostService";
import Loader from "../components/UI/loader/Loader";
import { useFetch } from "../components/hooks/useFetch";
import { ControlPagePosts } from "../components/UI/buttons/controlPagePosts/ControlPagePosts";
import { getPageCount } from "../components/utils/pages";
import { useNavigate } from "react-router-dom";
import "../css/Form.css";
import "../css/app.css";
import { useContext } from "react";
import { AuthContext } from "../context";

function Posts() {
    const history = useNavigate();
    const { userInfoBool } = !useContext(AuthContext);

    setTimeout(() => {
        userInfoBool && history("/Login");
    }, 1);

    const [posts, setPosts] = useState([]); // value array is object types
    const [filter, setFilter] = useState({
        selectedSort: "Сортировка по...",
        findInput: "",
    });
    const [showModal, setShowModal] = useState(false);
    const sortedAndSearchPost = usePost(
        posts,
        filter.selectedSort,
        filter.findInput
    );
    const limit = useState(10)[0];
    let [page, setPage] = useState(1);
    let [totalPages, setTotalPages] = useState(0);

    const createPost = (newPost) => setPosts([newPost, ...posts]);
    const deletePost = (postForDel) =>
        setPosts(posts.filter((p) => p.id !== postForDel.id));
    const sortPosts = (sort) => setFilter({ ...filter, selectedSort: sort });
    const showModalFn = (status) =>
        status ? setShowModal(true) : setShowModal(false);

    const nextPage = () => {
        if (page < totalPages) {
            setPage((page += 1));
            if (page === totalPages) {
                return false;
            }
        }
    };
    const backPage = () => {
        if (page < totalPages) {
            setPage((page -= 1));
            if (page === 1) {
                return false;
            }
        }
    };

    const [fetchPosts, isLoading, isError] = useFetch(async () => {
        const date = new Date();
        const dateCreatedPost =
            date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
        const postsFromServers = await PostService.getAll(limit, page);
        if (Array.isArray(postsFromServers.data)) {
            postsFromServers.data.forEach((el) => {
                el.date = dateCreatedPost;
            });
        }

        const totalCountPosts = postsFromServers.headers["x-total-count"];
        setTotalPages(getPageCount(totalCountPosts, limit));

        setPosts(postsFromServers.data);
        return postsFromServers.data;
    });

    useEffect(() => {
        console.clear();
        fetchPosts();
    }, [page]);

    return (
        <div className="App">
            <div className="container">
                <PostForm create={createPost} showError={showModalFn} />
                <hr style={{ marginTop: "15px" }} />
                <PostFilter
                    filter={filter}
                    setFilter={setFilter}
                    sortPosts={sortPosts}
                />

                {isError && (
                    <h1
                        style={{
                            textAlign: "center",
                            marginTop: "30px",
                        }}
                    >
                        Ошапка: ${isError}
                    </h1>
                )}

                {isLoading ? (
                    <Loader />
                ) : (
                    <PostsItems remove={deletePost} props={sortedAndSearchPost} />
                )}

                <ControlPagePosts
                    page={page}
                    totalPages={totalPages}
                    nextPageFn={nextPage}
                    backPageFn={backPage}
                />
            </div>
            <ErrorModal
                showModal={showModal}
                setShowModal={setShowModal}
                showModalFn={showModalFn}
            />
        </div>
    );
}

export default Posts;
