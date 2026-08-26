import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import FormLogin from "../FormLogin";

describe("FormLogin", () => {
  it("menampilkan error saat email tidak valid", () => {
    render(<FormLogin />);
    const tombolLogin = screen.getByText("Login");
    fireEvent.click(tombolLogin);
    expect(screen.getByText("Email tidak valid")).toBeInTheDocument();
  });

  it("menampilkan error saat password kurang dari 6 karakter", () => {
    render(<FormLogin />);
    const inputEmail = screen.getByPlaceholderText("Email");
    fireEvent.change(inputEmail, { target: { value: "test@test.com" } });

    const tombolLogin = screen.getByText("Login");
    fireEvent.click(tombolLogin);

    expect(screen.getByText("Password harus minimal 6 karakter")).toBeInTheDocument();
  });
});