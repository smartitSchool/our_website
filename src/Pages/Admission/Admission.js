import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import Banner from '../../Component/AboutUs/Banner/Banner';
import Footer from '../../Component/Footer/Footer';
import Header from '../../Component/Header/Header';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './Admission.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons'



const Admission = () => {
    const [fileName, setFileName] = useState('')
    const { register, handleSubmit } = useForm()

    // load all courses
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('http://localhost:8081/api/training/allTrainings')
            .then(res => res.json())
            .then(data => {
                setCourses(data)
            })
    }, []);




    const handleFileNameSave = (e) => {
        setFileName(e.target.files[0].name)
    }

    // save admission at database
    const onSubmit = (data) => {
        const admissionFormData = new FormData();

        admissionFormData.append('name', data.name)
        admissionFormData.append('nid', data.nid)
        admissionFormData.append('fathersName', data.fathersName)
        admissionFormData.append('mothersName', data.mothersName)
        admissionFormData.append('presentAddress', data.presentAddress)
        admissionFormData.append('permanentAddress', data.permanentAddress)
        admissionFormData.append('selectedCourse', data.selectedCourse)
        admissionFormData.append('DOB', data.DOB)
        admissionFormData.append('bloodGroup', data.bloodGroup)
        admissionFormData.append('gender', data.gender)
        admissionFormData.append('ocupation', data.ocupation)
        admissionFormData.append('nationality', data.nationality)
        admissionFormData.append('phone', data.phone)
        admissionFormData.append('phone2', data.phone2)
        admissionFormData.append('email', data.email)
        admissionFormData.append('gurdianContact', data.gurdianContact)
        admissionFormData.append('gurdianContact2', data.gurdianContact2)
        admissionFormData.append('gurdianRelation', data.gurdianRelation)
        admissionFormData.append('avatar', data.avatar[0])

        axios.post('http://localhost:8081/api/admission/addAdmission', admissionFormData)
            .then(res => {
                if (res.status === 200) {
                    alert('Your admission form has been Submitted')
                }
            });
    };



    const bannerText = ['Get admission', 'Learn with Experts', 'Explore our service']
    return (
        <div>
            <Header />
            <Banner
                bannerText={bannerText}
                pageName='Admission'
                imageLink='https://i.ibb.co/6H4zLhm/v796-nunny-03b.jpg'
            />
            <Container>

                <h2 className='page-heading'><u>Get</u> Admission</h2>
                <p className='font-size-a' >You can get admission in tow ways, Online and Offline. To get admission at online, please fill up the information. If you want to get admission at offline, <a href="Image/admission-form-smart-it-school.jpg" className='link' download>Download</a>  the admission form and submit the form at our office.</p>
                <h3 className='mt-4 sub-heading'>Online Admission Form</h3>



                {/* admission form */}
                <form onSubmit={handleSubmit(onSubmit)} method='POST' encType='multipart/form-data'>

                    {/* avatar upload */}

                    <label className='input-file-label'>
                        <input
                            className='inputfile'
                            type="file"
                            name='avatar'
                            accept="image/png, image/jpeg, image/jpg"
                            {...register('avatar')}
                            onChange={(e) => handleFileNameSave(e)}
                            required
                        />
                        <FontAwesomeIcon icon={faUpload} className='font-size-a' />
                        {
                            fileName
                                ?
                                <span><span className='selected-file'>"{fileName}" </span>is selected</span> :
                                'Upload your passport size image (only JPG, PNG and JPEG) >1MB is required'
                        }
                    </label>
                    <Row className='mt-4'>
                        <Col xs={12} md={6}>
                            <Form.Label>Your Name*</Form.Label>
                            <Form.Control {...register("name")} type="text" placeholder="Your Full Name" required />
                        </Col>
                        <Col xs={12} md={6}>
                            <Form.Label>NID/Birth Cerftificate/Passport</Form.Label>
                            <Form.Control {...register("nid")} type="number" placeholder="NID/Birth Cerftificate/ Passport" required />
                        </Col>
                    </Row>
                    <Row className='mt-4'>
                        <Col xs={12} md={6}>
                            <Form.Label>Father's Name*</Form.Label>
                            <Form.Control {...register("fathersName")} type="text" placeholder="Father's Name" required />
                        </Col>
                        <Col xs={12} md={6}>
                            <Form.Label>Mother's Name*</Form.Label>
                            <Form.Control {...register("mothersName")} type="text" placeholder="Mother's Name" required />
                        </Col>
                    </Row>
                    <Row className='mt-4'>
                        <Col xs={12} md={6}>
                            <Form.Label>Present Address*</Form.Label>
                            <Form.Control as='textarea' {...register("presentAddress")} type="text" placeholder="Present Address" required />
                        </Col>
                        <Col xs={12} md={6}>
                            <Form.Label>Permanent Address*</Form.Label>
                            <Form.Control as='textarea' {...register("permanentAddress")} type="text" placeholder="Permanent Address" required />
                        </Col>
                    </Row>
                    <Row className='mt-4'>
                        <Col md={12}>
                            <Form.Label>Select a Course</Form.Label>
                            <Form.Control as='select' {...register("selectedCourse")}>
                                {
                                    courses.map(course => <option value={course.course_name}>
                                        {course.course_name}
                                    </option>)
                                }
                            </Form.Control>
                        </Col>
                    </Row>
                    <Row className='mt-4'>
                        <Col xs={12} md={4}>
                            <Form.Label>Date of birth (mm/dd/yyyy)*</Form.Label>
                            <Form.Control {...register("DOB")} type='date' required />
                        </Col>
                        <Col xs={12} md={4}>
                            <Form.Label>Select Blood Group</Form.Label>
                            <Form.Control defaultValue='O+' as='select' {...register('bloodGroup')}>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                            </Form.Control>
                        </Col>
                        <Col xs={12} md={4}>
                            <Form.Label>Gender* </Form.Label> <br />
                            <input type="radio" name="male" value='Male' {...register("gender")} />
                            <label className='ms-1' htmlFor="male">Male</label>
                            <input className='ms-4' type="radio" name="female" value='Female'{...register("gender")} />
                            <label className='ms-1' htmlFor="femail">Female</label>
                        </Col>
                    </Row>
                    <Row className='mt-4'>
                        <Col xs={12} md={6}>
                            <Form.Label>Ocupation*</Form.Label>
                            <Form.Control placeholder='Your Ocupation' {...register("ocupation")} required />
                        </Col>
                        <Col xs={12} md={6}>
                            <Form.Label>Nationality*</Form.Label>
                            <Form.Control as='select' defaultValue='Bangladeshi' placeholder='Nationality' {...register("nationality")}>
                                <option value="Bangladeshi">Bangladeshi</option>
                                <option value="Non Bangladeshi">Non Bangladeshi</option>
                            </Form.Control>
                        </Col>
                    </Row>
                    <Row className='mt-4'>
                        <Col xs={12} md={4}>
                            <Form.Label> Phone*</Form.Label>
                            <Form.Control type='tel' {...register("phone")} required placeholder='Your Current Contact No' />
                        </Col>
                        <Col xs={12} md={4}>
                            <Form.Label> Secondary Phone</Form.Label>
                            <Form.Control type='tel'  {...register("phone2")} placeholder='Secondary Contact No (if applicable)' />
                        </Col>
                        <Col xs={12} md={4}>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email'  {...register("email")} placeholder='Email Address' />
                        </Col>
                    </Row>
                    <Row className='mt-4'>
                        <Col xs={12} md={4}>
                            <Form.Label>Guardian's Phone</Form.Label>
                            <Form.Control type='tel'  {...register("gurdianContact")} placeholder='Contact no of Gurdian' />
                        </Col>
                        <Col xs={12} md={4}>
                            <Form.Label>Another Contact</Form.Label>
                            <Form.Control type='tel'  {...register("gurdianContact2")} placeholder='Another contact of gurdian' />
                        </Col>
                        <Col xs={12} md={4}>
                            <Form.Label>Relation</Form.Label>
                            <Form.Control type='text' placeholder='Relation with this gurdian'  {...register("gurdianRelation")} />
                        </Col>
                    </Row>
                    <input type="submit" value="Submit" className='wide-btn-fill btn mt-4' />
                </form>
                <br />
            </Container>
            <Footer />
        </div>
    );
};

export default Admission;