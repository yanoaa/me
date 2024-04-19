import {expect, test} from "vitest";
import {runtime} from "@/app/layout";

test("runtime test for deployment", () => {
    expect(runtime).toBe('runtime');
})
