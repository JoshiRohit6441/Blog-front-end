import React from "react";
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function HomeCard({ data }) {
  return (
    <>
      {data.map((value, index) => (
        <Card className="custom-card" key={index}>
          <Card.Header className="card-header-home">
            <p className="mb-0 text-center">{value.card_title}</p>
          </Card.Header>
          <Card.Body className="card-body-home">
            <div>
              <p className="text-end">{value.created_at}</p>
              <p className="mb-0">{value.card_description}</p>
            </div>
          </Card.Body>
          <Card.Footer className="card-footer-home">
            <div className="d-flex justify-content-between">
              <p className="mb-0">{value.author}</p>
              <p className="mb-0">
                <NavLink
                  to={`/home/blog/${value.id}`}
                  className="text-decoration-none text-muted custum-redirect-link-read-more"
                >
                  Read Blog
                </NavLink>
              </p>
            </div>
          </Card.Footer>
        </Card>
      ))}
    </>
  );
}

HomeCard.defaultProps = {
  data: [],
};

export default HomeCard;
