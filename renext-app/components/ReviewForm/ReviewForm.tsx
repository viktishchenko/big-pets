import { ReviewFormProps } from "./ReviewForm.props";
import styles from "./ReviewForm.module.css";
import cn from "classnames";
import { Input, Rating, Textarea, Button } from "..";
import CloseIcon from "./close.svg";
import { useForm, Controller } from "react-hook-form";
import { IReviewForm, IReviewSentResponse } from "./ReviewForm.interface";
import { useState } from "react";
import axios from "axios";
import { API } from "../../helpers/api";

export const ReviewForm = ({
  productId,
  className,
  isOpened,
  ...props
}: ReviewFormProps): JSX.Element => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IReviewForm>();

  const [isSucsess, setIsSucsess] = useState<boolean>(false);
  const [isError, setIsError] = useState<string>();

  const onSubmit = async (formData: IReviewForm) => {
    try {
      const { data } = await axios.post<IReviewSentResponse>(
        API.review.createDemo,
        { ...formData, productId }
      );
      if (data.message) {
        setIsSucsess(true);
        reset();
      } else {
        setIsError("Что-то пошло не так!");
      }
    } catch (error) {
      if (error instanceof Error) {
        setIsError(error.message);
      }
    }
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
            tabIndex={isOpened ? 0 : -1}
          />
          <Input
            {...register("title", {
              required: { value: true, message: "Заполните заголовок" },
            })}
            placeholder="Заголовок отзыва"
            error={errors.title}
            tabIndex={isOpened ? 0 : -1}
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
                  tabIndex={isOpened ? 0 : -1}
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
            tabIndex={isOpened ? 0 : -1}
          />
          <div className={styles.submit}>
            <Button appearance="primary" tabIndex={isOpened ? 0 : -1}>
              Отправить
            </Button>
            <span className={styles.info}>
              * Перед публикацией отзыв пройдет модерацию
            </span>
          </div>
        </div>
        {isSucsess && (
          <div className={cn(styles.success, styles.panel)}>
            <div className={styles.successTitle}>Ваш отзыв отправлен</div>
            <div>Спасибо, ваш отзыв будет опубликован после проверки.</div>
            <CloseIcon
              className={styles.close}
              onClick={() => {
                setIsSucsess(false);
              }}
            />
          </div>
        )}
        {isError && (
          <div className={cn(styles.error, styles.panel)}>
            Что-то пошло не так, попробуйте обновить страницу!
            <CloseIcon
              className={styles.close}
              onClick={() => {
                setIsError(undefined);
              }}
            />
          </div>
        )}
      </form>
    </>
  );
};
