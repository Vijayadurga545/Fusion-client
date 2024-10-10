import React, { useState } from "react";
import {
  TextInput,
  Select,
  Button,
  Container,
  Group,
  Title,
} from "@mantine/core";

function VisitorDetails() {
  const [visitorData, setVisitorData] = useState({
    name: "",
    designation: "",
    phone: "",
    email: "",
    idType: "",
    idNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVisitorData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Visitor Data:", visitorData);
    // Further processing
  };

  return (
    <Container
      size={600}
      my={40}
      style={{
        maxHeight: "80vh",
        overflowY: "auto",
        padding: "2rem",
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        backgroundColor: "white",
      }}
    >
      <Title order={2} align="center" mb="md">
        Visitor's Details
      </Title>

      <form onSubmit={handleSubmit}>
        <TextInput
          label="Name*"
          name="name"
          value={visitorData.name}
          onChange={handleChange} // Ensure this handler is attached
          required
          styles={{ input: { fontSize: "12px" } }}
        />

        <TextInput
          label="Designation*"
          name="designation"
          value={visitorData.designation}
          onChange={handleChange} // Ensure this handler is attached
          required
          styles={{ input: { fontSize: "12px" } }}
        />

        <TextInput
          label="Phone*"
          name="phone"
          value={visitorData.phone}
          onChange={handleChange} // Ensure this handler is attached
          required
          styles={{ input: { fontSize: "12px" } }}
        />

        <TextInput
          label="Email*"
          name="email"
          value={visitorData.email}
          onChange={handleChange} // Ensure this handler is attached
          required
          styles={{ input: { fontSize: "12px" } }}
        />

        <Select
          label="ID Type*"
          name="idType"
          value={visitorData.idType}
          onChange={(value) =>
            setVisitorData((prevData) => ({ ...prevData, idType: value }))
          } // Ensure this is also updating state
          data={[
            { value: "Aadhaar", label: "Aadhaar" },
            { value: "PAN", label: "PAN" },
            { value: "Passport", label: "Passport" },
          ]}
          required
          placeholder="Select"
          styles={{ input: { fontSize: "12px" } }}
        />

        <TextInput
          label="ID Number*"
          name="idNumber"
          value={visitorData.idNumber}
          onChange={handleChange} // Ensure this handler is attached
          required
          styles={{ input: { fontSize: "12px" } }}
        />

        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Container>
  );
}

export default VisitorDetails;
