import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import "./auth.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Here you would send a request to your backend to handle password reset
    setLoading(false);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#000", position: "relative", overflow: "hidden" }}>
      <Container className="d-flex flex-column align-items-center justify-content-start" style={{ minHeight: "100vh", paddingTop: "60px" }}>
        <h2 className="text-white text-center mb-2">Forgot Password</h2>
        <h4 className="text-white text-center mb-4">Reset Your Password</h4>
        <Row className="justify-content-center w-100">
          <Col md={6} lg={4}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail" className="mb-3">
                <Form.Label className="text-white">Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  style={{ minWidth: "320px", maxWidth: "100%" }}
                />
              </Form.Group>
              <Button
                type="submit"
                className="text-center mt-3 btnStyle"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Reset Link"}
              </Button>
              <p className="mt-3" style={{ color: "#9d9494" }}>
                Remembered? <Link to="/login" className="text-white lnk">Login</Link>
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ForgotPassword; 