import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Masukkan data admin sesuai permintaanmu
  const admin = await prisma.user.upsert({
    where: { email: 'ipuk@gmail.com' },
    update: {},
    create: {
      nama: 'ipuk',
      email: 'ipuk@gmail.com',
      noTelp: '08274486304',
      password: 'ipuk123', // Di masa depan, gunakan bcrypt untuk keamanan
      role: 'ADMIN',
    },
  });
  console.log('✅ Akun Admin Berhasil Dibuat:', admin);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });