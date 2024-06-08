import { useFormContext } from 'react-hook-form';
import Input from '../Input';

function NicknameForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <Input
        type="text"
        label="nickname"
        error={errors.nickname && errors.nickname.message?.toString()}
        {...register('nickname')}
      />

      {/* <label htmlFor="nickname">nickname</label>
      <input
        type="text"
        id="nickname"
        {...register('nickname', { required: '닉네임을 입력하세요.' })}
      />
      <div>
        {errors.nickname && <p>{errors.nickname.message?.toString()}</p>}
      </div> */}
    </div>
  );
}

export default NicknameForm;
