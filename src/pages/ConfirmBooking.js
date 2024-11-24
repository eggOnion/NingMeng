import { Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useLocation } from "react-router-dom";

function ConfirmBooking() {
  const location = useLocation();
  const { state } = location;

  return (
    <main className="content-page">
      <section>
        <article>
          <Heading textAlign={"center"} mb={10}>
            Book Successfuly!
          </Heading>
          {state ? (
            <div>
              <Text>Name: {state.name}</Text>
              <Text>Email: {state.email}</Text>
              <Text>Number of Pax: {state.pax}</Text>
              <Text>Phone Number: {state.phone}</Text>
            </div>
          ) : (
            <Text>No data available</Text>
          )}         
        </article>
      </section>
    </main>
  );
}

export default ConfirmBooking;
