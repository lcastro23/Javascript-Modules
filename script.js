export let length = 10;
export let width = 10;
export let height = 10;

export function volume(l, w, h)
{
	return l * w * h;
}

export function surface_area(l, w, h)
{
	return (l * w + w * h + h * l) * 2;
}

export function is_cube(l, w, h)
{
	if(l == w && w == h)
	{
		return true;
	}
	else
	{
		return false;
	}
}
