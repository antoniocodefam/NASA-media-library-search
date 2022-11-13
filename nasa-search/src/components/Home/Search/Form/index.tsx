import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import * as formik from "formik";
import * as yup from "yup";
import { CgSearch } from "react-icons/cg";
import { GrPowerReset } from "react-icons/gr";
import { useNavigate } from "react-router";

const currentYear = new Date().getFullYear();

const { Formik } = formik;

const schema = yup.object().shape({
  from: yup.number().when("until", (until) => {
    if (until) {
      return yup.number().max(+until - 1, `Value must be less than ${until}`);
    } else {
      return yup
        .number()
        .max(currentYear - 1, `Value must be less than ${currentYear}`);
    }
  }),
  until: yup
    .number()
    .max(currentYear - 1, `Value must be less than ${currentYear}`),
});

export interface IHomeSearchFormInputs {
  search: string;
  from: string;
  until: string;
}

export interface HomeSearchFormProps {
  initialValues: IHomeSearchFormInputs;
  onSubmit: (values: IHomeSearchFormInputs) => void;
}
export default function HomeSearchForm({
  initialValues,
  onSubmit,
}: HomeSearchFormProps) {
  const navigate = useNavigate();

  return (
    <Formik
      validationSchema={schema}
      onSubmit={onSubmit}
      initialValues={initialValues}
    >
      {({
        handleSubmit,
        handleChange,
        resetForm,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="justify-content-md-center">
            <Form.Group
              as={Col}
              md="3"
              controlId="validationFormik"
              className="px-1"
            >
              <Form.Label>Search</Form.Label>
              <Form.Control
                type="text"
                name="search"
                placeholder="Apollo 11"
                value={values.search}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group
              as={Col}
              md="2"
              controlId="validationYearFrom"
              className="px-1"
            >
              <Form.Label>Year from</Form.Label>
              <Form.Control
                type="number"
                name="from"
                placeholder={(currentYear - 10).toString()}
                value={values.from}
                onChange={handleChange}
                isInvalid={!!errors.from}
                max={values.until ? +values.until - 1 : currentYear - 1}
              />
              <Form.Control.Feedback type="invalid">
                {errors.from}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="2"
              controlId="validationYearUntil"
              className="px-1"
            >
              <Form.Label>Year until</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="number"
                  name="until"
                  placeholder={currentYear.toString()}
                  value={values.until}
                  onChange={handleChange}
                  max={currentYear}
                  isInvalid={!!errors.until}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.until}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Col md="2" className="pt-2 px-1">
              <div className="mt-4 d-flex gap-2">
                <Button
                  type="submit"
                  disabled={touched && !isValid}
                  title="Submit"
                  data-test-id="submit"
                >
                  <CgSearch />
                </Button>
                <Button
                  type="reset"
                  variant="outline-secondary"
                  title="Reset"
                  disabled={touched && !isValid}
                  onClick={() => {
                    resetForm();
                    navigate("/");
                  }}
                  data-test-id="reset"
                >
                  <GrPowerReset />
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
}
