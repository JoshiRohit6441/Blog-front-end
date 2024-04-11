import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

function Blog() {
  const [blogData, setBlogData] = useState(null);
  const id = useParams();
  console.log(id);

  const fetchData = () => {
    axios
      .get(`http://127.0.0.1:8000/api/blogs-published-id/${id.ID}/`)
      .then((response) => {
        setBlogData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  if (!blogData) {
    return <div>Loading...</div>;
  }

  console.log(blogData);
  return (
    <>
      <div className="p-5">
        <Card>
          <Card.Header>
            <h1 className="text-center mb-0">{blogData.card_title}</h1>
          </Card.Header>
          <Card.Body>
            <div className="d-flex justify-content-between mb-5 mt-3">
              <div>
                {blogData && blogData.image ? (
                  <img
                    src={`http://127.0.0.1:8000${blogData.image}`}
                    alt="Blog"
                  />
                ) : null}
              </div>
              <div className="d-grid justify-content-between">
                <p>Author&nbsp;:-&nbsp;{blogData.author}</p>
                <p>date&nbsp;:-&nbsp;{blogData.created_at}</p>
              </div>
            </div>
            <div>
              <div dangerouslySetInnerHTML={{ __html: blogData.content }} />
            </div>

            <div>
              <p>Tags: {blogData.tags.join(", ")}</p>
            </div>
            <div>
              <a
                href={blogData.links}
                className="text-decoration-none text-dark"
              >
                click here to go to given links.
              </a>
            </div>
          </Card.Body>
          <Card.Footer className="d-flex justify-content-between">
            <div className="d-flex justify gap-5">
              <p className="mb-0">like</p>
              <p className="mb-0">comment</p>
            </div>
            <div>
              <NavLink
                to="/"
                className="text-decoration-none text-muted return-home-button"
              >
                Go Back
              </NavLink>
            </div>
          </Card.Footer>
        </Card>
      </div>
    </>
  );
}

export default Blog;
