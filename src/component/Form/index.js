import React, { Component } from 'react'
import axios from 'axios';
import {useFormik} from 'formik';
import {Card, Button, Form, Container, Row } from 'react-bootstrap';
import './form.css';
import styled from 'styled-components';

const FormHeroes = () =>{
    const formik = useFormik({
        initialValues: {
            nama: '',
            born: '',
            death: '',
            description: '',
            established: '',
            url: ''
        },
        onSubmit: () =>{
            axios.post('http://localhost:8000/heroes', formik.values)
        }
    })
    return (
       <Container>
            <Row className="justify-content-md-center">
                <Wrapper>
                    <Card className="text-left">
                        <Card.Img variant="top" src="https://www.amalan.com/hubfs/Assets/Blog_Pictures/MerdekaKolom.jpeg"></Card.Img>
                        <Card.Body>
                            <Form onSubmit={formik.handleSubmit}>
                                <Form.Group>
                                    <Form.Label>Nama</Form.Label>
                                    <Form.Control 
                                    type="text" 
                                    name="nama" 
                                    onChange={formik.handleChange} 
                                    value={formik.values.nama}
                                    placeholder="Enter Name">
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Born</Form.Label>
                                    <Form.Control 
                                    type="number" 
                                    name="born" 
                                    onChange={formik.handleChange} 
                                    value={formik.values.born}
                                    placeholder="Tahun Lahir">
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Death</Form.Label>
                                    <Form.Control 
                                    type="number" 
                                    name="death" 
                                    onChange={formik.handleChange} 
                                    value={formik.values.death}
                                    placeholder="Tahun Meninggal">
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control 
                                    type="text" 
                                    name="description" 
                                    onChange={formik.handleChange} 
                                    value={formik.values.description}
                                    placeholder="Deskripsi">
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Established</Form.Label>
                                    <Form.Control 
                                    type="text" 
                                    name="established" 
                                    onChange={formik.handleChange} 
                                    value={formik.values.established}
                                    placeholder="Tahun Jadi Pahlawan">
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Image URL</Form.Label>
                                    <Form.Control 
                                    type="text" 
                                    name="url" 
                                    onChange={formik.handleChange} 
                                    value={formik.values.url}
                                    placeholder="Image URL">
                                    </Form.Control>
                                </Form.Group>
                                <Button type="submit">Submit</Button>
                            </Form>
                        </Card.Body>
                    </Card>
        </Wrapper>
        </Row>
        </Container>
    )
    
}
export default FormHeroes;

const Wrapper = styled.section `
padding: 0;
margin: 0;
align-content: center;
`;