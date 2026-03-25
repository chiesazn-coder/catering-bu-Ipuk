import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nama, email, noTelp, password } = body;

    // Cek apakah email sudah terdaftar
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      return NextResponse.json(
        { success: false, message: "Email sudah terdaftar!" },
        { status: 400 }
      );
    }

    // Simpan user baru ke database MySQL
    const user = await prisma.user.create({
      data: {
        nama,
        email,
        noTelp,
        password, // Disarankan pakai hashing bcrypt di masa depan
        role: "USER" // Default untuk pendaftar baru
      }
    });

    return NextResponse.json({ success: true, user });
  } catch (error) {
    console.error("Register Error:", error);
    return NextResponse.json(
      { success: false, message: "Terjadi kesalahan server" },
      { status: 500 }
    );
  }
}