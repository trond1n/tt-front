import React, { useState } from "react";
import styles from "./AddTea.module.css";
import close from "../../assets/svg/close.svg";
import closeSecond from "../../assets/svg/close-second.svg";
import plus from "../../assets/svg/plus_green.svg";
import plusSecond from "../../assets/svg/plus-second.svg";
import chevronDown from "../../assets/svg/chevron-down.svg";

interface AddTeaProps {
  onClose: () => void;
}

interface InfusionTime {
  id: number;
  value: string;
}

const AddTea: React.FC<AddTeaProps> = ({ onClose }) => {
  const [teaName, setTeaName] = useState<string>("");
  const [teaType, setTeaType] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [waterTemp, setWaterTemp] = useState<string>("");
  const [infusionTimes, setInfusionTimes] = useState<InfusionTime[]>([
    { id: 1, value: "00:15" },
    { id: 2, value: "00:30" },
    { id: 3, value: "00:45" },
  ]);
  const [photo, setPhoto] = useState<File | null>(null);
  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  };
  const teaTypes = [
    "Вид чая 1",
    "Вид чая 2",
    "Вид чая 3",
    "Вид чая 4",
    "Вид чая 5",
  ];

  const handleAddInfusion = () => {
    const newInfusion = { id: Date.now(), value: "00:00" };
    setInfusionTimes([...infusionTimes, newInfusion]);
  };

  const handleRemoveInfusion = (id: number) => {
    setInfusionTimes(infusionTimes.filter((infusion) => infusion.id !== id));
  };

  const handleInfusionChange = (id: number, value: string) => {
    setInfusionTimes(
      infusionTimes.map((infusion) =>
        infusion.id === id ? { ...infusion, value } : infusion
      )
    );
  };

  const handleReset = () => {
    setTeaName("");
    setTeaType("");
    setDescription("");
    setWaterTemp("");
    setInfusionTimes([
      { id: 1, value: "00:15" },
      { id: 2, value: "00:30" },
      { id: 3, value: "00:45" },
    ]);
    setPhoto(null);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = {
      teaName,
      teaType,
      description,
      waterTemp,
      infusionTimes,
      photo,
    };
    console.log("Form Data:", formData);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.closeButtonContainer}>
          <button className={styles.closeButton} onClick={onClose}>
            <img src={close} alt="closeButton" />
          </button>
        </div>
        <h2 className={styles.title}>Новый таймер</h2>

        <form className={styles.form} onSubmit={handleSave}>
          <div className={styles.formGroup}>
            <label className={styles.photoUpload} htmlFor="photo">
              {photo ? (
                <div className={styles.photoContainer}>
                  <img
                    src={URL.createObjectURL(photo)}
                    alt="preview"
                    className={styles.photoPreview}
                  />
                  <button
                    type="button"
                    className={styles.removePhoto}
                    onClick={() => setPhoto(null)}
                  >
                    {/* <img src={trash} alt="Удалить" /> */}
                  </button>
                </div>
              ) : (
                <div className={styles.photoPlaceholder}>
                  <img src={plusSecond} alt="Добавить фото" />
                  <input
                    type="file"
                    id="photo"
                    accept="image/*"
                    onChange={handlePhotoChange}
                    style={{ display: "none" }}
                  />
                </div>
              )}
            </label>
          </div>

          <div className={styles.formGroup}>
            {/* <label htmlFor="teaType">Сорт</label> */}
            <img
              src={chevronDown}
              alt="chevronDown"
              className={styles.chevron}
            />

            <select
              className={styles.select}
              id="teaType"
              value={teaType}
              onChange={(e) => setTeaType(e.target.value)}
            >
              <option style={{ display: "none" }} value="">
                Выберите сорт
              </option>
              {teaTypes.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.formGroup}>
            {/* <label htmlFor="teaName">Название чая</label> */}
            <input
              className={styles.input}
              type="text"
              id="teaName"
              value={teaName}
              onChange={(e) => setTeaName(e.target.value)}
              placeholder="Название чая"
            />
          </div>

          <div className={styles.formGroup}>
            <textarea
              className={`${styles.input} ${styles.textArea}`}
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Описание"
            />
          </div>

          <div className={styles.formGroup}>
            {/* <label htmlFor="waterTemp">Температура воды</label> */}
            <input
              type="number"
              id="waterTemp"
              value={waterTemp}
              onChange={(e) => setWaterTemp(e.target.value)}
              placeholder="Температура воды"
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formTitle}>Время проливов</label>
            <div className={styles.infusions}>
              {infusionTimes.map((infusion, index) => {
                const isLastElement = index === infusionTimes.length - 1;

                return (
                  <div key={infusion.id} className={styles.infusion}>
                    <span>{`${infusion.id} пролив`}</span>
                    <input
                      className={styles.input}
                      type="text"
                      value={infusion.value}
                      onChange={(e) =>
                        handleInfusionChange(infusion.id, e.target.value)
                      }
                    />
                    {!isLastElement ? (
                      <button
                        type="button"
                        onClick={() => handleRemoveInfusion(infusion.id)}
                      >
                        <img src={closeSecond} alt="closeButton" />
                      </button>
                    ) : (
                      <button type="button" onClick={() => handleAddInfusion()}>
                        <img src={plus} alt="addButton" />
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className={styles.buttons}>
            <button
              type="button"
              className={styles.resetButton}
              onClick={handleReset}
            >
              Сбросить
            </button>
            <button type="submit" className={styles.saveButton}>
              Сохранить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTea;
