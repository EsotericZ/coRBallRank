// import * as React from 'react';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Form, Field } from 'react-final-form';
// import { useMutation } from '@apollo/client'
// import { CREATE_USER } from '../../graphql/mutations/createUser';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Nav from '../nav/Nav';


// export const CreateUser = () => {
// 	const [createMutation,] = useMutation(CREATE_USER);
// 	const navigate = useNavigate();
//     const bull = (
//         // <Box
//         //     component="span"
//         //     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//         // >
//         //     •
//         // </Box>
//         <Box sx={{ minWidth: 275 }}>
//           <Card variant="outlined">{CreateUser}</Card>
//         </Box>
//     );

// 	return (
// 		<Form
// 			onSubmit={async (values) => {

// 				await createMutation({
// 					variables: {
// 						...values,
// 					},
// 					onCompleted: (data) => {
// 						console.log(data);
// 						// localStorage.setItem('token', data?.login?.token);
// 						navigate('/success');
// 					}
// 				});
// 			}}
// 			initialValues={{
// 				firstName: '',
// 				lastName: '',
// 				username: '',
// 				playerId: [],
// 				role: '',
// 				email: '',
// 				password: '',
// 				club: '',
// 				location: '',
// 			}}
// 			render={({values, handleSubmit, form}) => {

// 				return (
// 					<Card>
//                         <CardContent>
//                         <h1>FirstName</h1>
// 						<Field
// 							name='firstName'
// 							component='input'
// 						/>
// 						<h1>Last Name</h1>
// 						<Field
// 							name='lastName'
// 							component='input'
// 						/>
// 						<h1>Username</h1>
// 						<Field
// 							name='username'
// 							component='input'
// 						/>
// 						<h1>Email</h1>
// 						<Field
// 							name='email'
// 							component='input'
// 						/>
// 						<h1>Password</h1>
// 						<Field
// 							name='password'
// 							component='input'
// 							type='password'
// 						/>
// 						<h1>Club</h1>
// 						<Field
// 							name='club'
// 							component='input'
// 						/>
// 						<h1>Location</h1>
// 						<Field
// 							name='location'
// 							component='input'
// 						/>
// 						<button
// 							disabled={
// 								values?.password?.length === 0 || values?.email?.length === 0
// 							}
// 							onClick={async () => {
// 								await handleSubmit();
// 								form.reset();
//                                 console.log('click')
// 							}}>
// 							Submit
// 						</button>
//                         </CardContent>
// 					</Card>

// 				)
// 			}}
// 		/>
// 	)
// }


// export default CreateUser; 






// onSubmit={async (values) => {

//     await createMutation({
//         variables: {
//             ...values,
//         },
//         onCompleted: (data) => {
//             console.log(data);
//             // localStorage.setItem('token', data?.login?.token);
//             navigate('/success');
//         }
//     });
// }}
// initialValues={{
//     firstName: '',
//     lastName: '',
//     username: '',
//     playerId: '',
//     role: '',
//     email: '',
//     password: '',
//     club: '',
//     location: '',
// }}
// render={({values, handleSubmit, form}) => {
//     return (