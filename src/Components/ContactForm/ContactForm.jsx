import TextField from "@mui/material/TextField";
import {useForm} from "react-hook-form";

const LoginForm = () => {
  const {register, handleSubmit} = useForm();

  return (
    <div className='flex justify-center mt-6 bg-home w-full h-full'>
      <div className='w-4/5'>
        <div className='flex h-full items-start justify-center gap-4 p-2 w-full bg-black bg-opacity-40'>
          <img
            className='w-80 h-[600px]'
            src='../../../assets/ImgForm.jpg'
            alt=''
          />
          <div className='mt-10 pr-2'>
            <div className='flex flex-col gap-10 pl-5'>
              <div>
                <h2 className='text-primary-color text-left font-bold mb-3'>
                  CONSULTAS
                </h2>
                <p className='text-white text-left'>
                  Dejanos un comentario para que uno de nuestros miembros se
                  ponga en contacto
                </p>
              </div>
              <form onSubmit={handleSubmit((data) => console.log(data))}>
                <div className='flex'>
                  <div className='flex flex-col gap-10 w-full pr-2'>
                    <TextField
                      id='firstName'
                      name='firstName'
                      label='Nombre'
                      {...register("firstName")}
                      className='bg-dark-gray-300 bg-opacity-95 text-white'
                    />
                    <TextField
                      id='city'
                      name='city'
                      label='Ciudad'
                      {...register("city")}
                      className='bg-dark-gray-300 bg-opacity-75 ml-5 mr-5'
                    />
                  </div>
                  <div className='flex flex-col gap-10 w-full'>
                    <TextField
                      id='lastName'
                      name='lastName'
                      label='Apellido'
                      {...register("lastName")}
                      className='bg-dark-gray-300 bg-opacity-75'
                    />

                    <TextField
                      id='telephone'
                      label='Telefono'
                      {...register("telephone")}
                      className='bg-dark-gray-300 bg-opacity-75'
                    />
                  </div>
                </div>
                <div className='w-full mt-10'>
                  <TextField
                    id='question'
                    name='question'
                    {...register("question")}
                    label='Dejanos tu consulta'
                    multiline
                    rows={4}
                    className='w-full bg-dark-gray-300 bg-opacity-75'
                  />
                </div>
                <button
                  className='bg-primary-color text-white font-bold p-1 rounded-md justify-end mt-5 w-40'
                  type='submit'
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
