import settingsStyle from "../styles/Settings.module.css";
import formConstructorStyle from "../styles/FormConstructor.module.css";
import React from "react";
import { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
const { apiUrl } = publicRuntimeConfig;



const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Settings <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Reports
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Moderators
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Users
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Ban list
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const SettingField = (props) => {
  let fetchUrl;
  let tagName;

  if (!props.staticFetch) {
    fetchUrl = `${apiUrl}/${props.apiApp}/${props.apiAction}/${props.nameOfValue}`;
  } else {
    fetchUrl = `${apiUrl}/${props.apiApp}/${props.apiAction}`;
  }

  if (props.textarea) {
    tagName = "textarea";
  } else {
    tagName = "input";
  }

  return (
    <>
      <Formik
        initialValues={{
          [props.nameOfValue]: props.defaultValue,
          languageProfileId: 1,
        }}
        validate={(values) => {
          const errors = {};
          if (!values[props.nameOfValue]) {
            errors[props.nameOfValue] = "required";
          } else if (values[props.nameOfValue].length > props.maxLength) {
            errors[
              props.nameOfValue
            ] = `must be ${props.maxLength} characters or less`;
          }
          return errors;
        }}
        onSubmit={(values, actions) => {
          fetch(fetchUrl, {
            method: "PUT",
            body: JSON.stringify(values),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((response) => {
              if (response.ok) {
                const field = document.querySelector(
                  `${tagName}[name="${props.nameOfValue}"]`
                );
                field.classList.add("alert-success");
                setTimeout(() => {
                  field.classList.remove("alert-success");
                }, 500);
              }
            })
            .catch((error) => {
              const field = document.querySelector(
                `${tagName}[name="${props.nameOfValue}"]`
              );
              field.classList.add("alert-danger");
              setTimeout(() => {
                field.classList.remove("alert-danger");
              }, 500);
            });
        }}
      >
        {({ errors }) => (
          <Form className="input-group mb-3">
            {props.textarea ? (
              <Field
                as="textarea"
                className="form-control"
                placeholder={props.name}
                aria-label={props.name}
                aria-describedby="button-addon2"
                name={props.nameOfValue}
              />
            ) : (
              <Field
                type="text"
                className="form-control"
                placeholder={props.name}
                aria-label={props.name}
                aria-describedby="button-addon2"
                name={props.nameOfValue}
              />
            )}
            <Field type="hidden" name="languageProfileId" />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="submit"
                id={`button-save-${props.nameOfValue}`}
              >
                Save
              </button>
            </div>
            {errors[props.nameOfValue] && (
              <div
                className={`alert alert-danger ${settingsStyle.alert}`}
                role="alert"
              >
                {props.name} is {errors[props.nameOfValue]}
              </div>
            )}
          </Form>
        )}
      </Formik>
    </>
  );
};

const Buttons = (props) => {
  return (
    <div className={settingsStyle.settingsDiv2}>
      <h4>Buttons:</h4>
      <SettingField
        apiApp="languageProfile"
        apiAction="updateButtonName"
        name="Account settings"
        nameOfValue="accountSettings"
        defaultValue={props.names.accountSettings}
        maxLength="40"
      />
      <SettingField
        apiApp="languageProfile"
        apiAction="updateButtonName"
        name="Menu"
        nameOfValue="menu"
        defaultValue={props.names.menu}
        maxLength="40"
      />
      <SettingField
        apiApp="languageProfile"
        apiAction="updateButtonName"
        name="Back"
        nameOfValue="back"
        defaultValue={props.names.back}
        maxLength="40"
      />
      <SettingField
        apiApp="languageProfile"
        apiAction="updateButtonName"
        name="Start search"
        nameOfValue="startSearch"
        defaultValue={props.names.startSearch}
        maxLength="40"
      />
      <SettingField
        apiApp="languageProfile"
        apiAction="updateButtonName"
        name="Edit form"
        nameOfValue="editForm"
        defaultValue={props.names.editForm}
        maxLength="40"
      />
      <SettingField
        apiApp="languageProfile"
        apiAction="updateButtonName"
        name="Restart form"
        nameOfValue="restartForm"
        defaultValue={props.names.restartForm}
        maxLength="40"
      />
      <SettingField
        apiApp="languageProfile"
        apiAction="updateButtonName"
        name="Edit form field"
        nameOfValue="editFormField"
        defaultValue={props.names.editFormField}
        maxLength="40"
      />
      <SettingField
        apiApp="languageProfile"
        apiAction="updateButtonName"
        name="Activate account"
        nameOfValue="activate"
        defaultValue={props.names.activate}
        maxLength="40"
      />
      <SettingField
        apiApp="languageProfile"
        apiAction="updateButtonName"
        name="Deactivate account"
        nameOfValue="deactivate"
        defaultValue={props.names.deactivate}
        maxLength="40"
      />
      <SettingField
        apiApp="languageProfile"
        apiAction="updateButtonName"
        name="Yes"
        nameOfValue="yes"
        defaultValue={props.names.yes}
        maxLength="40"
      />
      <SettingField
        apiApp="languageProfile"
        apiAction="updateButtonName"
        name="No"
        nameOfValue="no"
        defaultValue={props.names.no}
        maxLength="40"
      />
    </div>
  );
};

const Emojies = (props) => {
  return (
    <>
      <h4>Emojies:</h4>
      <SettingField
        apiApp="botSetting"
        apiAction="updateEmojie"
        name="Like"
        nameOfValue="like"
        defaultValue={props.values.like}
        maxLength="10"
      />
      <SettingField
        apiApp="botSetting"
        apiAction="updateEmojie"
        name="Dislike"
        nameOfValue="dislike"
        defaultValue={props.values.dislike}
        maxLength="10"
      />
      <SettingField
        apiApp="botSetting"
        apiAction="updateEmojie"
        name="Report"
        nameOfValue="report"
        defaultValue={props.values.report}
        maxLength="10"
      />
      <SettingField
        apiApp="botSetting"
        apiAction="updateEmojie"
        name="Like + Message"
        nameOfValue="message"
        defaultValue={props.values.message}
        maxLength="10"
      />
    </>
  );
};

const FormFields = () => {
  const createNewField = (languageProfile) => {
    fetch(`${apiUrl}/formField/clearcreate`, {
      method: "POST",
      body: JSON.stringify({ languageProfileId: languageProfile }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      getFormData();
    });
  };

  const updateForm = (values) => {
    fetch(`${apiUrl}/formField/update`, {
      method: "PUT",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.ok) {
        const button = document.querySelector(`#saveFormButton`);
        button.classList.add("btn-outline-success");
        button.textContent = "✓";
        setTimeout(() => {
          button.textContent = "save";
          button.classList.remove("btn-outline-success");
        }, 800);
      }
    });
  };

  const [formData, setFormData] = useState(false);

  const getFormData = () => {
    fetch(`${apiUrl}/formField/all/1`)
      .then((response) => response.json())
      .then((data) => {
        const sortedFormData = data.sort((a, b) => a.id - b.id);
        setFormData(sortedFormData);
      });
  };
  useEffect(() => {
    getFormData();
  }, []);

  const deleteField = (id) => {
    fetch(`${apiUrl}/formField/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      getFormData();
    });
  };

  const initialValues = {};

  if (formData) {
    formData.forEach((item) => {
      initialValues[`question${item.id}`] = item.question;
      initialValues[`nameField${item.id}`] = item.nameField;
      initialValues[`isOptional${item.id}`] = item.isOptional;
      initialValues[`type${item.id}`] = item.type;
    });
  }

  return (
    <>
      {formData && (
        <>
          <Formik
            initialValues={{ ...initialValues }}
            onSubmit={(values, actions) => {
              updateForm(values);
            }}
          >
            {(formik) => (
              <Form
                id="formConstructor"
                className={formConstructorStyle.formConstructor}
              >
                <h4 className={formConstructorStyle.title}>
                  Form constructor:
                </h4>
                <div className={formConstructorStyle.fields}>
                  {formData.map((item, index) => (
                    <div className={formConstructorStyle.field} key={item.id}>
                      <div className={formConstructorStyle.formRow}>
                        <div className="col">
                          <Field
                            type="text"
                            name={`question${item.id}`}
                            className="form-control"
                            aria-describedby="button-addon2"
                          />
                        </div>
                        <div className="col">
                          <Field
                            type="text"
                            name={`nameField${item.id}`}
                            className="form-control"
                            aria-describedby="button-addon2"
                          />
                        </div>
                        <Field
                          type="checkBox"
                          name={`isOptional${item.id}`}
                          className={formConstructorStyle.checkBox}
                          aria-describedby="button-addon2"
                          checked={formik.values[`isOptional${item.id}`]}
                        />
                        <div
                          className={`form-group ${formConstructorStyle.selectGroup}`}
                        >
                          <Field
                            as="select"
                            id={`type${item.id}`}
                            name={`type${item.id}`}
                            className="form-control"
                          >
                            <option value="Text">Text</option>
                            <option value="Photo">Photo</option>
                          </Field>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => deleteField(item.id)}
                      >
                        Delete
                      </button>
                    </div>
                  ))}
                  <div className={formConstructorStyle.buttonDiv}>
                    <button
                      type="button"
                      className="btn btn-outline-success"
                      onClick={() => createNewField(1)}
                    >
                      New field
                    </button>
                    <button
                      id="saveFormButton"
                      type="submit"
                      className="btn btn-outline-primary"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </>
      )}
    </>
  );
};

export default function Settings() {
  const [languageProfile, setLanguageProfile] = useState(null);
  const [dataBot, setDataBot] = useState(null);

  useEffect(() => {
    fetch(`${apiUrl}/botSetting/get`)
      .then((response) => response.json())
      .then((data) => {
        setDataBot(data);
        fetch(`${apiUrl}/languageProfile/one/1`)
          .then((response) => response.json())
          .then((data) => {
            setLanguageProfile(data);
          });
      });
  }, []);

  return (
    <main>
      <Header />
      {dataBot && languageProfile && (
        <div className={settingsStyle.mainDiv}>
          <div className={settingsStyle.settingsDiv}>
            <div className={settingsStyle.settingsDiv1}>
              <h4>Main settings:</h4>
              <SettingField
                apiApp="botSetting"
                apiAction="updateBotToken"
                name="Bot token"
                nameOfValue="botToken"
                defaultValue={dataBot.botToken}
                maxLength="46"
                staticFetch={true}
              />
              <SettingField
                apiApp="languageProfile"
                apiAction="updateHelloMessage"
                name="Hello message"
                nameOfValue="helloMessage"
                defaultValue={languageProfile.helloMessage}
                maxLength="4096"
                textarea={true}
                staticFetch={true}
              />
              <div className={settingsStyle.languageProfileDiv}>
                <div className="form-group">
                  <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                  >
                    <option>English</option>
                  </select>
                </div>
                <button type="button" className="btn btn-outline-success">
                  Add new
                </button>
                <button type="button" className="btn btn-outline-danger">
                  Delete current
                </button>
              </div>
              <Emojies values={dataBot.emojies} />
            </div>
            <Buttons names={languageProfile.buttonNames} />
          </div>
          <FormFields />
        </div>
      )}
    </main>
  );
}