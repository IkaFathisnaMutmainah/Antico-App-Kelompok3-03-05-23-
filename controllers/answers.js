const db = require("../models");
const Quiz = db.anticoquiz;

// Memproses Jawaban Satu Quiz
exports.submitOne = async (req, res) => {
  const answers = {
    quizId: req.body.quizId,
    answer: req.body.answer,
  };

  try {
    var quiz = await Quiz.findOne({
      where: {
        id: req.body.quizId,
      },
    });

    if (req.body.answer == quiz.key) {
      res.status(200).json({
        message: "Jawabanmu Benar",
      });
    } else {
      res.status(200).json({
        message: `Jawaban Yang Benar Yaitu ${quiz.key}`,
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Menampilkan Jawaban Lebih Dari Satu Quiz
exports.submitMany = async (req, res) => {
  const answers = {
    quizId: req.body.quizId,
    answer: req.body.answer,
  };

  try {
    let jawabanBenar = 0;
    let totalSoal = answers.quizId.length;
    for (let i = 0; i < totalSoal; i++) {
      const quiz = await Quiz.findOne({
        limit: 1,
        where: {
          id: answers.quizId[i],
        },
        order: [["id", "DESC"]],
      });
      if (quiz.key == answers.answer[i]) {
        jawabanBenar = jawabanBenar + 1;
      }
    }
    res.status(200).json({
      message: `Jumlah Benar ${jawabanBenar} dari ${totalSoal} soal`,
    });
  } catch (error) {
    res.status(500).json({
      message: e.message,
    });
  }
};
