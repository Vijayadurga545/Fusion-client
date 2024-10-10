import React, { useState } from "react";
import {
  TextInput,
  Textarea,
  Select,
  Button,
  Container,
  Group,
  Title,
  Popover,
  ActionIcon,
  Divider,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { IconCalendar } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

function BookingDetails() {
  const [bookingData, setBookingData] = useState({
    rooms: 1,
    people: 1,
    purpose: "",
    remarks: "",
    billsToBeSettledBy: "",
    arrivalDate: null,
    departureDate: null,
    arrivalTimeHours: "",
    arrivalTimeMinutes: "",
    arrivalTimePeriod: "",
    departureTimeHours: "",
    departureTimeMinutes: "",
    departureTimePeriod: "",
  });

  const [openedArrival, setOpenedArrival] = useState(false);
  const [openedDeparture, setOpenedDeparture] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBookingData({ ...bookingData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Data:", bookingData);
    navigate("/visitor-details", { state: bookingData });
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
        Place a Request
      </Title>

      {/* Centered Horizontal Line with Subheadings */}
      <Group position="center" align="center" mb="lg">
        <Title order={4} weight={50} style={{ marginRight: "14rem" }}>
          Booking Details
        </Title>
        {/* <Title order={4} weight={50}>Visitor's Details</Title> */}
      </Group>

      <Divider my="md" style={{ borderWidth: 2, borderColor: "black" }} />

      <form onSubmit={handleSubmit}>
        {/* Arrival Date and Time */}
        <Group mb="md" grow>
          <Popover
            opened={openedArrival}
            onChange={setOpenedArrival}
            position="bottom"
            withArrow
            shadow="md"
          >
            <Popover.Target>
              <TextInput
                label="Arrival Date*"
                value={
                  bookingData.arrivalDate
                    ? bookingData.arrivalDate.toLocaleDateString()
                    : ""
                }
                onClick={() => setOpenedArrival((o) => !o)}
                placeholder="Select Arrival Date"
                required
                rightSection={
                  <ActionIcon onClick={() => setOpenedArrival((o) => !o)}>
                    <IconCalendar size={16} />
                  </ActionIcon>
                }
                styles={{ input: { fontSize: "12px" } }}
              />
            </Popover.Target>
            <Popover.Dropdown>
              <DatePicker
                value={bookingData.arrivalDate}
                onChange={(value) => {
                  setBookingData({ ...bookingData, arrivalDate: value });
                  setOpenedArrival(false);
                }}
              />
            </Popover.Dropdown>
          </Popover>

          <Select
            label="Arrival Hours"
            name="arrivalTimeHours"
            value={bookingData.arrivalTimeHours}
            onChange={(value) =>
              setBookingData({ ...bookingData, arrivalTimeHours: value })
            }
            data={Array.from({ length: 12 }, (_, i) => ({
              value: `${i + 1}`,
              label: `${i + 1}`,
            }))}
            placeholder="Hours"
            required
            styles={{ input: { fontSize: "12px" } }}
          />

          <Select
            label="Minutes"
            name="arrivalTimeMinutes"
            value={bookingData.arrivalTimeMinutes}
            onChange={(value) =>
              setBookingData({ ...bookingData, arrivalTimeMinutes: value })
            }
            data={Array.from({ length: 60 }, (_, i) => ({
              value: `${i}`,
              label: `${i}`,
            }))}
            placeholder="Minutes"
            required
            styles={{ input: { fontSize: "12px" } }}
          />

          <Select
            label="AM/PM"
            name="arrivalTimePeriod"
            value={bookingData.arrivalTimePeriod}
            onChange={(value) =>
              setBookingData({ ...bookingData, arrivalTimePeriod: value })
            }
            data={[
              { value: "AM", label: "AM" },
              { value: "PM", label: "PM" },
            ]}
            placeholder="AM/PM"
            required
            styles={{ input: { fontSize: "12px" } }}
          />
        </Group>

        {/* Departure Date and Time */}
        <Group mb="md" grow>
          <Popover
            opened={openedDeparture}
            onChange={setOpenedDeparture}
            position="bottom"
            withArrow
            shadow="md"
          >
            <Popover.Target>
              <TextInput
                label="Departure Date*"
                value={
                  bookingData.departureDate
                    ? bookingData.departureDate.toLocaleDateString()
                    : ""
                }
                onClick={() => setOpenedDeparture((o) => !o)}
                placeholder="Select Departure Date"
                required
                rightSection={
                  <ActionIcon onClick={() => setOpenedDeparture((o) => !o)}>
                    <IconCalendar size={16} />
                  </ActionIcon>
                }
                styles={{ input: { fontSize: "12px" } }}
              />
            </Popover.Target>
            <Popover.Dropdown>
              <DatePicker
                value={bookingData.departureDate}
                onChange={(value) => {
                  setBookingData({ ...bookingData, departureDate: value });
                  setOpenedDeparture(false);
                }}
              />
            </Popover.Dropdown>
          </Popover>

          <Select
            label="Departure Hours"
            name="departureTimeHours"
            value={bookingData.departureTimeHours}
            onChange={(value) =>
              setBookingData({ ...bookingData, departureTimeHours: value })
            }
            data={Array.from({ length: 12 }, (_, i) => ({
              value: `${i + 1}`,
              label: `${i + 1}`,
            }))}
            placeholder="Hours"
            required
            styles={{ input: { fontSize: "12px" } }}
          />

          <Select
            label="Minutes"
            name="departureTimeMinutes"
            value={bookingData.departureTimeMinutes}
            onChange={(value) =>
              setBookingData({ ...bookingData, departureTimeMinutes: value })
            }
            data={Array.from({ length: 60 }, (_, i) => ({
              value: `${i}`,
              label: `${i}`,
            }))}
            placeholder="Minutes"
            required
            styles={{ input: { fontSize: "12px" } }}
          />

          <Select
            label="AM/PM"
            name="departureTimePeriod"
            value={bookingData.departureTimePeriod}
            onChange={(value) =>
              setBookingData({ ...bookingData, departureTimePeriod: value })
            }
            data={[
              { value: "AM", label: "AM" },
              { value: "PM", label: "PM" },
            ]}
            placeholder="AM/PM"
            required
            styles={{ input: { fontSize: "12px" } }}
          />
        </Group>

        {/* Number of People, Rooms, Category */}
        <Group mb="md" grow>
          <TextInput
            label="Number of People *"
            type="number"
            name="people"
            value={bookingData.people}
            onChange={handleChange}
            required
            min={1}
            styles={{ input: { fontSize: "12px" } }}
          />
          <TextInput
            label="Number of Rooms *"
            type="number"
            name="rooms"
            value={bookingData.rooms}
            onChange={handleChange}
            required
            min={1}
            styles={{ input: { fontSize: "12px" } }}
          />
          <Select
            label="Category *"
            name="category"
            value={bookingData.category}
            onChange={(value) =>
              setBookingData({ ...bookingData, category: value })
            }
            data={[
              { value: "AC", label: "AC" },
              { value: "Non-AC", label: "Non-AC" },
            ]}
            placeholder="Select"
            required
            styles={{ input: { fontSize: "12px" } }}
          />
        </Group>

        {/* Purpose of Visit */}
        <TextInput
          label="Purpose of Visit *"
          name="purpose"
          value={bookingData.purpose}
          onChange={handleChange}
          required
          styles={{ input: { fontSize: "12px" } }}
        />

        {/* Remarks */}
        <Textarea
          label="Remarks"
          name="remarks"
          value={bookingData.remarks}
          onChange={handleChange}
          autosize
          minRows={2}
          styles={{ input: { fontSize: "12px" } }}
        />

        {/* Billing Responsibility */}
        <Select
          label="Bills to be Settled By *"
          name="billsToBeSettledBy"
          value={bookingData.billsToBeSettledBy}
          onChange={(value) =>
            setBookingData({ ...bookingData, billsToBeSettledBy: value })
          }
          data={[
            { value: "Guest", label: "Guest" },
            { value: "Organization", label: "Organization" },
          ]}
          required
          placeholder="Select"
          styles={{ input: { fontSize: "12px" } }}
        />

        <Group position="right" mt="md">
          <Button type="submit">Next</Button>
        </Group>
      </form>
    </Container>
  );
}

export default BookingDetails;
