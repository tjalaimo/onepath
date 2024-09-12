import React, { useState } from "react";
import {
  Box,
  Button,
  Stepper,
  Step,
  StepLabel,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  Grid,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Card,
  CardContent,
  List,
  Divider,
  Chip,
  IconButton
} from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import date picker styles
import AddIcon from '@mui/icons-material/Add';

const steps = [
  "Demographic Details",
  "Contact Information",
  "Healthcare Information",
  "Forms & Documents",
  "Review & Complete",
];

const initialPatientData = {
  firstName: "Thomas",
  lastName: "Alaimo",
  dob: new Date(1988, 10, 31),
  relationshipStatus: "Married",
  gender: "Male",
  address1: "121 N New Hampshire Ave",
  address2: "",
  city: "Los Angeles",
  state: "CA",
  zipCode: "91607",
  email: "alaimo@email.com",
  phone: "555 645 1234",
  primaryCarePhysician: "Dr Primary",
  physicianPhone: "555 123 1234",
  pharmacy: "Rite Aid",
  pharmacyPhone: "555 432 4321",
  insurance: {
    company: "Aetna",
    type: "HMO",
    memberNumber: "123456",
    groupNumber: "G3215",
  },
  healthConditions: ['Diabetes', 'Hypertension', 'Asthma'],
  medications: ['Asprin 200mg 2x Day', 'Albuterol as needed'],
  consent: true,
  authorization: false,
  privacy: false,
  accessCodeGenerated: false,
};

const PatientCheckIn = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [patientData, setPatientData] = useState(initialPatientData);
  const [tempData, setTempData] = useState(initialPatientData);
  const [medicationInput, setMedicationInput] = useState("");   

  // Placeholder health conditions
  const healthConditions = [
    'Diabetes', 'Hypertension', 'Asthma', 'Allergies', 'Heart Disease', 'High Cholesterol'
  ];  

  // Handle the "Next" button
  const handleNext = () => {
    setPatientData(tempData); // Only update patientData when "Next" is clicked
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  // Handle the "Back" button
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTempData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle checkbox changes
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setTempData((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

   // Handle health conditions checkboxes
   const handleHealthConditionChange = (condition) => {
    setPatientData((prev) => ({
      ...prev,
      healthConditions: prev.healthConditions.includes(condition)
        ? prev.healthConditions.filter((item) => item !== condition)
        : [...prev.healthConditions, condition],
    }));
  };

  // Handle adding a medication
  const addMedication = () => {
    setTempData((prevState) => ({
      ...prevState,
      medications: [...prevState.medications, medicationInput],
    }));
    setMedicationInput("");
  };

  // Forms and Documents section
  const formsDocumentsSection = (
    <Box sx={{ mb: 4 }}>

        <Box sx={{ mt: 4, mb: 2 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Consent</Typography>
            <Box
            sx={{
                mb: 2,
                display: "flex",
                flexDirection: "column",
                maxHeight: 200,
                overflow: "hidden",
                overflowY: "scroll",
                border: "1px solid black",
                p: 1,
                borderRadius: '3px'
                }}
            >
                <Typography variant="body1">
                    Shared Electronic Medical Records 
                    We share an electronic medical records system with Community Medical Centers. 
                    Smoke Free Environment 
                    For the health of our patients, employees and visitors, smoking is not permitted at the Community Health Partners offices. 
                    Weapon Free Environment 
                    Weapons of any kind are not allowed at any of the Community Health Partners offices. 
                    No Show/Appointment Cancellation Policy 
                    We would like to provide you with outstanding service. This however requires your cooperation. If you are unable to keep 
                    a scheduled appointment, please call us at least 24 hours in advance so we can give this appointment to another patient. 
                    If you fail to keep an appointment or do not call at least 24 hours in advance, you are considered a “No Show” and a 
                    $35.00 charge may be billed directly to you since it is not covered by any insurance plan. 
                    Recording Devices Policy
                    Under California law, it is illegal for you to record a confidential communication without the consent of all parties involved, 
                    this includes conversations with doctors and other medical professionals. In order to protect confidential information and 
                    the privacy rights of practice providers and staff, the use of recording devices such as cell phones, audio recorders, or 
                    any other equipment used to capture or record images and/or sound by patients or visitors is prohibited. [California Penal 
                    Code Section 632.01]
                    Open Payments
                    The Open Payments database is a federal tool used to search payments made by drug and device companies to 
                    physicians and teaching hospitals. It can be found at https://openpaymentsdata.cms.gov.
                    I have read, understand, and agree to the above.
                </Typography>
            </Box>
            <FormControlLabel
                control={
                <Checkbox
                    checked={tempData.consent}
                    onChange={handleCheckboxChange}
                    name="consent"
                />
                }
                label="I agree to the treatment consent statement."
            />
        </Box>
        
        <Divider variant="middle" />

        <Box sx={{ mt: 4, mb: 2 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Authorization</Typography>
            <Box
            sx={{
                mb: 2,
                display: "flex",
                flexDirection: "column",
                maxHeight: 200,
                overflow: "hidden",
                overflowY: "scroll",
                border: "1px solid black",
                p: 1,
                borderRadius: '3px'
                }}
            >
                <Typography variant="body1">
                    I. 
                    II. 
                    Consent for Diagnosis and Treatment 
                    I acknowledge and understand that, in presenting myself for treatment and medical care to Community Health 
                    Partners, I authorize and consent to the administration and performance of all tests and treatments which may 
                    be ordered by the physician (and/or designated assistant) and carried out by members of the Community Health 
                    Partners medical staff and personnel. I understand that some of my medical care can and will be accomplished 
                    via remote Telehealth (also known as Telemedicine) visits, and I consent to their use where deemed medically 
                    appropriate by Community Health Partners medical staff. I am aware that medicine is not an exact science and I 
                    acknowledge that no guarantees have been made to me as a result of treatment or examination. 
                    Release and Use of Information 
                    I understand that Community Health Partners will record medical and other information concerning my treatment in 
                    electronic and other physical form. Such information is required in the course of my treatment, and may be released 
                    by Community Health Partners for the purposes permitted by law and as authorized on this form. I understand that 
                    portions of my records may be disclosed to qualified non-Community Health Partners personnel for the purpose of 
                    conducting scientific or statistical research, management or financial audits, licensure and program evaluation or 
                    other similar purpose. I will not be identified by name or other personally identifying information in any report of such 
                    research, audit or evaluation without my express written consent. 
                    I hereby authorize Community Health Partners to release to my insurance companies, employer insurance groups, 
                    health plans, Medicare/Medicaid program, its insurance carriers or intermediaries any medical records or other 
                    information concerning my treatment to obtain reimbursement for the treatment and services provided to me by 
                    Community Health Partners and its affiliated providers. This Agreement and Authorization for Services does not allow 
                    the release of records regarding my treatment for services requiring a specific authorization under State or Federal 
                    Law. 
                    III. Teaching Program 
                    I understand that appropriately supervised residents, interns, medical students, students of ancillary health care 
                    professions (e.g. nursing, x-ray, and rehabilitation therapy), post-graduate fellows, and other trainees may observe, 
                    examine, treat and participate in my care as part of educational programs. 
                    IV. Assignment of Benefits and Agreement to Cooperate in Collection Efforts  
                    In consideration of the healthcare services provided to me ("Services") by Community Health Partners, I hereby 
                    assign Community Health Partners all of my rights and claims for reimbursement under Medicare, Medicaid, or 
                    group accident or health insurance policy for which benefits may be available for payment of the services provided. 
                    Community Health Partners includes, without limitation, all other physicians, physicians’ assistants, nurses, 
                    therapists, laboratories, diagnostic testing entities, and all other persons or entities on whose behalf Community 
                    Health Partners provides billing services in connection with the Services. In addition, I hereby agree to personally 
                    cooperate with, and take all steps necessary, required or reasonably requested by any reimbursement source to 
                    effectuate, perfect, confirm or validate my assignment and authorization of Community Health Partners as my 
                    assignee and authorized representative, and to assist Community Health Partners with pursuing payment from any 
                    reimbursement source. 
                    1
                    Updated 9.13.2023
                    Agreement and Authorization for Services 
                    V. Guarantee of Payment  
                    I understand and agree that I am financially responsible for any and all charges related to any Services rendered. 
                    While my claims may be paid by the above-mentioned coverage sources, I recognize that payment is not guaranteed 
                    and that I am ultimately responsible to pay Community Health Partners the balance due of all charges not paid for by 
                    the above mentioned coverage (excluding those charges not collectible pursuant to Medicare regulation). This may 
                    include costs of collection and/or reasonable attorneys’ fees.
                    VI. Consent to Photograph  
                    I hereby consent to Community Health Partners’ use of digital and/or video recording of procedures and treatments 
                    provided to me for use in treatment or for health care operations purposes such as peer review or medical education.
                </Typography>                                
            </Box>            
            <FormControlLabel
                control={
                <Checkbox
                    checked={tempData.authorization}
                    onChange={handleCheckboxChange}
                    name="authorization"
                />
                }
                label="I agree to the authorization statement."
            />                                    
        </Box>

        <Divider variant="middle" />

        <Box sx={{ mt: 4, mb: 2 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Privacy Policy</Typography>
            <Box
            sx={{
                mb: 2,
                display: "flex",
                flexDirection: "column",
                maxHeight: 200,
                overflow: "hidden",
                overflowY: "scroll",
                border: "1px solid black",
                p: 1,
                borderRadius: '3px'
                }}
            >
                <Typography variant="body1">
                    I acknowledge that I have received a copy of Community Health Partners Notice of Privacy Practices. I understand that the 
                    Notice of Privacy Practices describes how Community Health Partners may disclose and use my protected health information. I 
                    am encouraged to read the Notice of Privacy Practices in full. 
                </Typography>                                
            </Box>            
            <FormControlLabel
                control={
                <Checkbox
                    checked={tempData.privacy}
                    onChange={handleCheckboxChange}
                    name="privacy"
                />
                }
                label="I have read and agree to the privacy statement."
            />
        </Box>

        <Divider variant="middle" />

        <Box sx={{ mt: 4, mb: 2 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Access Code</Typography>
            <Box
            sx={{
                mb: 2,
                display: "flex",
                flexDirection: "column",
                maxHeight: 200,
                overflow: "hidden",
                overflowY: "scroll",
                border: "1px solid black",
                p: 1,
                borderRadius: '3px'
                }}
            >
                <Typography variant="body1">
                    By checking this box you consent to providing an access code to the health care provider for the office visit.
                    An access code provides the provider with a method of viewing medical history such as scans and tests which are currently
                    stored within the system and helps provide a higher quality of care.
                </Typography>                                
            </Box>            
            <FormControlLabel
                control={
                <Checkbox
                    checked={tempData.accessCodeGenerated}
                    onChange={handleCheckboxChange}
                    name="accessCodeGenerated"
                />
                }
                label="I agree to generate a one time access code to share medical information with the provider."
            />
        </Box>
      
      <Divider variant="middle" />
    </Box>
  );

  // Review section
  const reviewSection = (
    <Box sx={{ mx: 2, mt: 4 }}>              

        <Box sx={{ mt: 4, mb: 2 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Demographic Information</Typography>
            <Typography sx= {{ mb: 2 }}>First Name: {patientData.firstName}</Typography>
            <Typography sx= {{ mb: 2 }}>Last Name: {patientData.lastName}</Typography>
            <Typography sx= {{ mb: 2 }}>Date of Birth: {patientData.dob?.toLocaleDateString()}</Typography>
            <Typography sx= {{ mb: 2 }}>Relationship Status: {patientData.relationshipStatus}</Typography>
            <Typography sx= {{ mb: 2 }}>Gender: {patientData.gender}</Typography>
        </Box>

        <Divider variant="middle" />

        <Box sx={{ mt: 4, mb: 2 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Contact Information</Typography>
            <Typography sx= {{ mb: 2 }}>Address: {patientData.address1}, {patientData.address2}, {patientData.city}, {patientData.state}, {patientData.zipCode}</Typography>
            <Typography sx= {{ mb: 2 }}>Email: {patientData.email}</Typography>
            <Typography sx= {{ mb: 2 }}>Phone: {patientData.phone}</Typography>
        </Box>

        <Divider variant="middle" />

        <Box sx={{ mt: 4, mb: 2 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Health Care Information</Typography>
            <Typography sx= {{ mb: 2 }}>Primary Care Physician: {patientData.primaryCarePhysician} - {patientData.physicianPhone}</Typography>
            <Typography sx= {{ mb: 2 }}>Pharmacy: {patientData.pharmacy} - {patientData.pharmacyPhone}</Typography>
            <Typography sx= {{ mb: 2 }}>Medications: {patientData.medications.join(", ")}</Typography>
            <Typography sx= {{ mb: 2 }}>Health Conditions: {patientData.healthConditions.join(", ")}</Typography>
            <Typography sx= {{ mb: 2 }}>Insurance: {patientData.insurance.company} - {patientData.insurance.type}</Typography>
        </Box>
      
    </Box>
  );

  // Render current step
  const renderStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return (
          <Box>
            <TextField
              label="First Name"
              name="firstName"
              value={tempData.firstName}
              onChange={handleInputChange}
              fullWidth
              sx={{mt: 4, mb: 2 }}
            />
            <TextField
              label="Last Name"
              name="lastName"
              value={tempData.lastName}
              onChange={handleInputChange}
              fullWidth
              sx={{ mb: 2 }}
            />
            <DatePicker
              selected={tempData.dob}
              onChange={(date) => setTempData({ ...tempData, dob: date })}
              dateFormat="MM/dd/yyyy"
              placeholderText="Select Date of Birth"
              sx={{ mb: 2 }}
            />
            <FormControl fullWidth sx={{ mt: 2, mb: 2 }}>
              <InputLabel>Relationship Status</InputLabel>
              <Select
                name="relationshipStatus"
                value={tempData.relationshipStatus}
                onChange={handleInputChange}
              >
                <MenuItem value="Single">Single</MenuItem>
                <MenuItem value="Married">Married</MenuItem>
                <MenuItem value="Divorced">Divorced</MenuItem>
                <MenuItem value="Widowed">Widowed</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Gender</InputLabel>
              <Select
                name="gender"
                value={tempData.gender}
                onChange={handleInputChange}
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>
          </Box>
        );
      case 1:
        return (
          <Box>
            <TextField
              label="Address Line 1"
              name="address1"
              value={tempData.address1}
              onChange={handleInputChange}
              fullWidth
              sx={{ mt: 4, mb: 2 }}
            />
            <TextField
              label="Address Line 2"
              name="address2"
              value={tempData.address2}
              onChange={handleInputChange}
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              label="City"
              name="city"
              value={tempData.city}
              onChange={handleInputChange}
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              label="State"
              name="state"
              value={tempData.state}
              onChange={handleInputChange}
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              label="Zip Code"
              name="zipCode"
              value={tempData.zipCode}
              onChange={handleInputChange}
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              label="Email"
              name="email"
              value={tempData.email}
              onChange={handleInputChange}
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              label="Phone Number"
              name="phone"
              value={tempData.phone}
              onChange={handleInputChange}
              fullWidth
              sx={{ mb: 2 }}
            />
          </Box>
        );
      case 2:
        return (
          <Box>
            <Box sx={{ mt: 4, mb: 2 }}>
                <Typography variant="h6">Care Details:</Typography>
                <TextField
                label="Primary Care Physician"
                name="primaryCarePhysician"
                value={tempData.primaryCarePhysician}
                onChange={handleInputChange}
                fullWidth
                sx={{ mt: 4, mb: 2 }}
                />
                <TextField
                label="Physician Phone"
                name="physicianPhone"
                value={tempData.physicianPhone}
                onChange={handleInputChange}
                fullWidth
                sx={{ mb: 2 }}
                />
                <TextField
                label="Pharmacy"
                name="pharmacy"
                value={tempData.pharmacy}
                onChange={handleInputChange}
                fullWidth
                sx={{ mb: 2 }}
                />
                <TextField
                label="Pharmacy Phone"
                name="pharmacyPhone"
                value={tempData.pharmacyPhone}
                onChange={handleInputChange}
                fullWidth
                sx={{ mb: 2 }}
                />
            </Box>

            <Divider variant="middle" />

            {/* Add Health Conditions */}
            <Box sx={{ mt: 4, mb: 2 }}>
                <Typography variant="h6">Health Conditions:</Typography>
                <Grid container spacing={2}>
                    {healthConditions.map((condition) => (
                        <Grid item xs={6} key={condition}>
                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={patientData.healthConditions.includes(condition)}
                                onChange={() => handleHealthConditionChange(condition)}
                            />
                            }
                            label={condition}
                        />
                        </Grid>
                    ))}
                </Grid>
            </Box>

            <Divider variant="middle" />

            {/* Add Medications */}
            <Box sx={{ mt: 4, mb: 4 }}>
                <Typography variant="h6">Medications:</Typography>
                <List>
                    {tempData.medications.map((medication, index) => (
                        
                            <Chip key={medication} label={medication} color="primary" sx={{ mr: 1, mb: 1 }} />

                    ))}
                </List>
                <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
                    <TextField
                    label="Add Medication"
                    value={medicationInput}
                    onChange={(e) => setMedicationInput(e.target.value)}
                    fullWidth
                    />
                    <IconButton color="primary" onClick={addMedication}>
                    <AddIcon />
                    </IconButton>
                </Box>
            </Box>

           
          </Box>
        );
      case 3:
        return formsDocumentsSection;
      case 4:
        return reviewSection;
      default:
        return "Unknown step";
    }
  };

  return (
    <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
            <Card sx={{ marginBottom: 2, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '12px' }}>
                <CardContent>
                    <Box>
                        <Stepper activeStep={activeStep} alternativeLabel>
                            {steps.map((label, index) => (
                            <Step key={index}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                            ))}
                        </Stepper>
                        <Box>{renderStepContent(activeStep)}</Box>
                        <Box mt={2}>
                            <Button disabled={activeStep === 0} onClick={handleBack}>
                            Back
                            </Button>
                            {activeStep === steps.length - 1 ? (
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => alert("Check-in complete")}
                            >
                                Complete Check-In
                            </Button>
                            ) : (
                            <Button variant="contained" color="primary" onClick={handleNext}>
                                Next
                            </Button>
                            )}
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Grid>
    </Grid>
  );
};

export default PatientCheckIn;