// Penggunaan Model
const db = require("../models");
const Materi = db.materies;

// Menambahkan Data Quiz
exports.createMateri = async (req, res) => {
  try {
    const data = await Materi.create(req.body);
    res.json({
      message: "Materi Berhasil Ditambahkan",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: null,
    });
  }
};

// Menampilkan Semua Data Materi
exports.getAllMateri = async (req, res) => {
  try {
    const materies = await Materi.findAll();
    res.json({
      message: "Materi Berhasil Ditampilkan",
      data: materies,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: null,
    });
  }
};

//  Menampilkan Data Quiz Berdasarkan ID tertentu
exports.findOne = async (req, res) => {
  const id = req.params.id;
  try {
    const materi = await Materi.findByPk(id, { rejectOnEmpty: true });
    res.json({
      message: `Materi Dengan id=${id} Berhasil Ditampilkan.`,
      data: materi,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || `Materi Dengan id=${id} Gagal Ditampilkan.`,
      data: null,
    });
  }
};

// Menampilkan Data Quiz Berdasarkan Kategori ID Tertentu
exports.getByMateriId = async (req, res) => {
  const id = req.params.id;
  try {
    const materies = await Materi.findAll({
      where: {
        materiId: id,
      },
      rejectOnEmpty: true,
    });
    res.json({
      message: `Materi Dengan id=${id} Berhasil Ditampilkan.`,
      data: materies,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || `Materi Dengan id=${id} Tidak Tersedia`,
      data: null,
    });
  }
};

// Mengubah Data Materi Berdasarkan Id
exports.updateMateri = async (req, res) => {
  const id = req.params.id;
  try {
    const materi = await Materi.findByPk(id, { rejectOnEmpty: true });
    materi.update(req.body, {
      where: { id },
    });
    res.json({
      message: "Materi Berhasil Diubah",
      data: materi,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Sepertinya Ada Kesalahan Saat Mengubah Data Materi",
      data: null,
    });
  }
};

// Menghapus Data Sesuai Dengan ID
exports.deleteMateri = async (req, res) => {
  const id = req.params.id;
  try {
    const materi = await Materi.findByPk(id, { rejectOnEmpty: true });

    materi.destroy();

    res.json({
      message: "Materi Berhasil Dihapus",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Sepertinya Ada Kesalahan Saat Menghapus Data Materi",
      data: null,
    });
  }
};
