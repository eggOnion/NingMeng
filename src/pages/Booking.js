import React from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  Heading,
  Box,
  Button,
  Input,
  SelectRoot,
  SelectTrigger,
  SelectContent,
  SelectItem,
  createListCollection,
  SelectValueText,
} from "@chakra-ui/react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/form-control";

function Booking() {
  //Validation Schema
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .required("*Name is required"),
    email: Yup.string().email("Invalid email address"),
    // .required("*Email is required"),
    pax: Yup.number()
      .positive("pax must be a positive number")
      .min(1, "*Minimum of 1 pax is required")
      .required("*Minimum of 1 pax is required"),
    phone: Yup.string()
      .matches(/^[0-9]{8}$/, "Phone number must be exactly 8 digits")
      .required("*Phone number is required"),
  });

  const occasion = createListCollection({
    items: [
      { label: "Birthday", value: "Birthday" },
      { label: "Anniversary", value: "Anniversary" },
      { label: "Proposal", value: "Proposal" },
      { label: "Corporate", value: "Corporate" },
      { label: "Gathering", value: "Gathering" },
    ],
  });

  const navigate = useNavigate();

  return (
    <main className="content-page">
      <section>
        <article>
          <Heading size="lg">Reserve a Table</Heading>
          <p>
            Please fill in the form accurately to enable us to serve you better!
          </p>
          <Box
            maxW="400px"
            mx="auto"
            mt={5}
            p={5}
            boxShadow="md"
            borderRadius="md"
          >
            <Formik
              initialValues={{
                name: "",
                email: "",
                pax: "",
                phone: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(true);
                navigate("/booking/confirmation", { state: values });
                setSubmitting(false);
              }}
            >
              {({ errors, touched, values, isSubmitting }) => (
                <Form>
                  {/* Name Field */}
                  <FormControl isInvalid={errors.name && touched.name} mb={20}>
                    <FormLabel htmlFor="name">Name*</FormLabel>
                    <Field
                      as={Input}
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      border="1px solid"
                      borderColor="black"
                      borderRadius="md"
                    />
                    <FormErrorMessage color={"red"} fontWeight={"bold"}>
                      {errors.name}
                    </FormErrorMessage>
                  </FormControl>

                  {/* Email Field */}
                  <FormControl
                    isInvalid={errors.email && touched.email}
                    mb={20}
                  >
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Field
                      as={Input}
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      border="1px solid"
                      borderColor="black"
                      borderRadius="md"
                    />
                    <FormErrorMessage color={"red"} fontWeight={"bold"}>
                      {errors.email}
                    </FormErrorMessage>
                  </FormControl>

                  {/* Pax Field */}
                  <FormControl isInvalid={errors.pax && touched.pax} mb={20}>
                    <FormLabel htmlFor="pax">Number of Pax*</FormLabel>
                    <Field
                      as={Input}
                      id="pax"
                      name="pax"
                      type="number"
                      placeholder="Total number of pax"
                      border="1px solid"
                      borderColor="black"
                      borderRadius="md"
                    />
                    <FormErrorMessage color={"red"} fontWeight={"bold"}>
                      {errors.pax}
                    </FormErrorMessage>
                  </FormControl>

                  {/* Phone Field */}
                  <FormControl
                    isInvalid={errors.phone && touched.phone}
                    mb={25}
                  >
                    <FormLabel htmlFor="phone">Phone*</FormLabel>
                    <Field
                      as={Input}
                      id="phone"
                      name="phone"
                      placeholder="Enter your phone number"
                      border="1px solid"
                      borderColor="black"
                      borderRadius="md"
                    />
                    <FormErrorMessage color={"red"} fontWeight={"bold"}>
                      {errors.phone}
                    </FormErrorMessage>
                  </FormControl>

                  {/* Dropdown Field */}
                  <FormLabel htmlFor="occasion">Occasion</FormLabel>
                  <SelectRoot collection={occasion} size="sm" width="320px">
                    <SelectTrigger>
                      <Box
                        border="2px solid"
                        borderColor="blue.500"
                        borderRadius="md"
                        p="2"
                        display="flex"
                        alignItems="center"
                        width="100%"
                      >
                        <SelectValueText placeholder="Select Occasion..." />
                        <span style={{ marginLeft: "auto" }}>▼</span>
                      </Box>
                    </SelectTrigger>
                    <SelectContent>
                      {occasion.items.map((item) => (
                        <SelectItem
                          item={item}
                          key={item.value}
                          _hover={{
                            backgroundColor: "blue.500", // Change the background on hover
                            color: "white", // Change text color on hover
                            cursor: "pointer", // Add a pointer cursor
                          }}
                          _focus={{
                            backgroundColor: "blue.600", // Focus effect (optional for keyboard users)
                          }}
                        >
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </SelectRoot>

                  <Button
                    type="submit"
                    isDisabled={Object.keys(errors).length > 0 || isSubmitting}
                    mt={4}
                    colorScheme="blue"
                    isFullWidth
                    isLoading={isSubmitting}
                  >
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>
          </Box>
        </article>
      </section>
    </main>
  );
}

export default Booking;
