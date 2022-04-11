import { Form, Field } from 'react-final-form';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { LOGIN } from '../../graphql/mutations/login';
import './login.css';

const Login = () => {
	const [loginMutation,] = useMutation(LOGIN);
	const navigate = useNavigate();

	return (
		<Form
			onSubmit={async (values) => {
				await loginMutation({
					variables: {
						...values,
					},
					onCompleted: (data) => {
						console.log(data);
						localStorage.setItem('token', data?.login?.token);
						navigate('/home');
					}
				});
			}}
			initialValues={{
				email: '',
				password: '',
			}}
			render={({values, handleSubmit, form}) => {

				return (
					<div className='login'>
						<Field className="email"
							name='email'
							component='input'
							
						/>
						<Field className="pass"
							name='password'
							component='input'
							type='password'
							margin="dense"
						/>
						<button type="submit" className="loginBtn"
							// disabled={
							// 	values?.password?.length === 0 || values?.email?.length === 0
							// }
							onClick={async () => {
								await handleSubmit();
								form.reset();
							}}>
							LOGIN
						</button>
					</div>
				)
			}}
		/>
	)
}

export default Login;