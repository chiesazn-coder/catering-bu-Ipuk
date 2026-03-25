import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // Cari user di database MySQL
    const user = await prisma.user.findFirst({
      where: {
        email: email,
        password: password, // Gunakan bcrypt.compare jika password di-hash
      },
    });

    if (user) {
      return NextResponse.json({ 
        success: true, 
        user: { nama: user.nama, role: user.role } 
      });
    } else {
      return NextResponse.json(
        { success: false, message: "Email atau Password salah!" }, 
        { status: 401 }
      );
    }
  } catch (error) {
    console.error("Login Error:", error);
    return NextResponse.json(
      { success: false, message: "Terjadi kesalahan server" }, 
      { status: 500 }
    );
  }
}