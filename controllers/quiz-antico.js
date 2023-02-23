// Penggunaan Model
const db = require("../models");
const Quiz = db.anticoquiz;

// Menambahkan Data Quiz
exports.create = async (req, res) => {
  try {
    const data = await Quiz.create(req.body);
    res.json({
      message: "Quiz Berhasil Dibuat",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: null,
    });
  }
};

// Menampilkan Semua Data Quiz
exports.getAll = async (req, res) => {
  try {
    const anticoquiz = await Quiz.findAll();
    res.json({
      message: "Quiz Berhasil Ditampilkan",
      data: anticoquiz,
    });
  } catch (error) {
    res.status(500).json({
      message: error.mesaage,
      data: null,
    });
  }
};

// Mengubah Data Quiz Sesuai Dengan ID
exports.update = async (req, res) => {
  const id = req.params.id;
  try {
    const quiz = await Quiz.findByPk(id, { rejectOnEmpty: true });
    quiz.update(req.body, {
      where: { id },
    });
    res.json({
      message: "Quiz Berhasil Diubah",
      data: quiz,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Sepertinya Ada Kesalahan Saat Mengubah Data",
      data: null,
    });
  }
};

// Menghapus Data Sesuai Dengan ID
exports.delete = async (req, res) => {
  const id = req.params.id;
  try {
    const quiz = await Quiz.findByPk(id, { rejectOnEmpty: true });

    quiz.destroy();

    res.json({
      message: "Quiz Berhasil Dihapus",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Sepertinya Ada Kesalahan Saat Menghapus Data",
      data: null,
    });
  }
};

//  Menampilkan Data Quiz Berdasarkan ID tertentu
exports.findOne = async (req, res) => {
  const id = req.params.id;
  try {
    const quiz = await Quiz.findByPk(id, { rejectOnEmpty: true });
    res.json({
      message: `Quiz Dengan id=${id} Berhasil Ditampilkan.`,
      data: quiz,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || `Quiz Dengan id=${id} Gagal Ditampilkan.`,
      data: null,
    });
  }
};

// Menampilkan Data Quiz Berdasarkan Kategori ID Tertentu
exports.getByCategoryId = async (req, res) => {
  const id = req.params.id;
  try {
    const anticoquiz = await Quiz.findAll({
      where: {
        categoryId: id,
      },
      rejectOnEmpty: true,
    });
    res.json({
      message: `Quiz Dengan id=${id} Berhasil Ditampilkan.`,
      data: anticoquiz,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || `Quiz Dengan id=${id} Tidak Tersedia`,
      data: null,
    });
  }
};
