import { ReviewFormProps } from "./ReviewForm.props";
import styles from "./ReviewForm.module.css";
import cn from "classnames";
import { Input, Rating, Textarea, Button } from "..";
import CloseIcon from "./close.svg";
import { useForm, Controller } from "react-hook-form";
import { IReviewForm } from "./ReviewForm.interface";
import React from "react";

export const ReviewForm = ({
  productId,
  className,
  ...props
}: ReviewFormProps): JSX.Element => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IReviewForm>();

  const onSubmit = (dataForm: IReviewForm) => {
    console.log("dataForm :>> ", dataForm);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={cn(styles.reviewForm, className)} {...props}>
          <div className={styles.formTitle}>Оставить отзыв</div>
          <Input
            {...register("name", {
              required: { value: true, message: "Заполните имя" },
            })}
            placeholder="Имя"
            error={errors.name}
          />
          <Input
            {...register("title", {
              required: { value: true, message: "Заполните заголовок" },
            })}
            placeholder="Заголовок отзыва"
            error={errors.title}
          />
          <div className={styles.rating}>
            <span>Оценка</span>
            <Controller
              control={control}
              rules={{ required: { value: true, message: "Укажите рейтинг" } }}
              name="rating"
              render={({ field }) => (
                <Rating
                  isEditable
                  rating={field.value}
                  ref={field.ref}
                  setRating={field.onChange}
                  error={errors.rating}
                />
              )}
            />
          </div>
          <Textarea
            {...register("description", {
              required: { value: true, message: "Заполните отзыв" },
            })}
            className={styles.description}
            placeholder="Ваш отзыв"
            error={errors.description}
          />
          <div className={styles.submit}>
            <Button appearance="primary">Отправить</Button>
            <span className={styles.info}>
              * Перед публикацией отзыв пройдет модерацию
            </span>
          </div>
        </div>
        <div className={styles.success}>
          <div className={styles.successTitle}>Ваш отзыв отправлен</div>
          <div>Спасибо, ваш отзыв будет опубликован после проверки.</div>
          <CloseIcon className={styles.close} />
        </div>
      </form>
    </>
  );
};
