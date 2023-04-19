import { useForm } from "react-hook-form";
import styles from "./loginForm.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../store/userInfoSlice";

function LoginForm() {
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "all",
  });

  const onSubmit = (data) => {
    dispatch(login(data));
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Login
        <input
          className={styles.input}
          {...register("login", {
            required: "Поле обязательно к заполнению",
            minLength: {
              value: 4,
              message: "Минимум 4 символов",
            },
          })}
        />
      </label>
      <div className={styles.infoBlok}>
        {errors?.login && (
          <p>{errors?.login?.message || "Ошибка попробуйте еще раз"}</p>
        )}
      </div>
      <label>
        Password
        <input
          type="password"
          className={styles.input}
          {...register("password", {
            required: "Поле обязательно к заполнению",
            minLength: {
              value: 6,
              message: "Минимум 6 символов",
            },
          })}
        />
      </label>
      <div className={styles.infoBlok}>
        {errors?.password && (
          <p>{errors?.password?.message || "Ошибка попробуйте еще раз"}</p>
        )}
      </div>
      <input className={styles.submit} type="submit" value={"SIGN IN"} />
    </form>
  );
}
export default LoginForm